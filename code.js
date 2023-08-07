import _ from "lodash"

import { libraryData, userManagementData, catalogData } from "./data.js"

class Catalog {
  static authorNames(catalogData, book) {
    const authorIds = _.get(book, "authorIds")
    const names = _.map(authorIds, (authorId) => {
      return _.get(catalogData, ["authorsById", authorId, "name"])
    })
    return names
  }

  static bookInfo(catalogData, book) {
    const bookInfo = {
      "title": _.get(book, "title"),
      "isbn": _.get(book, "isbn"),
      "authorNames": Catalog.authorNames(catalogData, book)
    }
    return bookInfo
  }

  static searchBooksByTitle(catalogData, query) {
    const allBooks = _.values(_.get(catalogData, "booksByIsbn")) // bookByIsbn の中身を取り出す
    const matchingBooks = _.filter(allBooks, (book) => _.get(book, "title").includes(query))
    const bookInfos = _.map(matchingBooks, (book) => Catalog.bookInfo(catalogData, book))
    return bookInfos
  }
}


class Library {
  static searchBooksByTitleJSON(libraryData, query) {
    const results = Catalog.searchBooksByTitle(_.get(libraryData, "catalog"), query)
    const resultsJSON = JSON.stringify(results)
    return resultsJSON
  }
}


class UserManagement {
  static isLibrarian(userManagement, email) {
    return _.has(_.get(userManagement, "librariansByEmail"), email)
  }

  static isVIPMember(userManagement, email) {
    return _.get(userManagement, ["membersByEmail", email, "isVIP"]) == true
  }

  static isSuperMember(userManagement, email) {
    return _.get(userManagement, ["membersByEmail", email, "isSuper"]) == true
  }
}


console.log("Library search Watch", Library.searchBooksByTitleJSON(libraryData, "Watch"))


console.log("isLibrarian : ", UserManagement.isLibrarian(userManagementData, "franck@gmail.com"))
console.log("VIP? ", UserManagement.isVIPMember(userManagementData, "alice@gmail.com"))