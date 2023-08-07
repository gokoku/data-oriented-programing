
export const catalogData = {

  "booksByIsbn": {

    "978-1982137274": {
      "isbn": "978-1982137274",
      "title": "7 Habits of Highly Effective People",
      "authorIds": [ "sean-covey", "stephen-covey" ]
    },

    "978-1779501127": {
      "isbn": "978-1779501127",
      "title": "Watchmen",
      "publiklcationYear": 1987,
      "authorIds": ["alan-moore", "dave-gibbons"],
      "bookItems": [
        {
          "id": "book-item-1",
          "libId": "nyc-central-lib",
          "isLent": true
        },
        {
          "id": "book-item-2",
          "libId": "nyc-central-lib",
          "isLent": false
        }
      ]
    }
  },

  "authorsById": {
    "alan-moore": {
      "name": "Alan Moore",
      "bookIsbns": ["978-779501127"]
    },

    "dave-gibbons": {
      "name": "Dave Gibbons",
      "bookIsbns": ["978-1779501127"]
    }
  }
}

export const userManagementData = {
  "librariansByEmail": {
    "franck@gmail.com": {
      "email": "franck@gmail.com",
      // btoa("mypassword")
      "encryptedPassword": "bXlwYXNzd29yZA=="
    }
  },
  "membersByEmail": {
    "samantha@gmail.com": {
      "email": "samangha@gmail.com",
      // btoa("secret")
      "encryptedPassword": "c2VjcmV0",
      "isBlocked": false,
      "bookLendings": [
        {
          "bookItemId": "book-item-1",
          "bookIsbn": "978-1779501127",
          "lendingData": "2020-04-23"
        }
      ]
    },
    "alice@gmail.com": {
      "email": "alice@gmail.com",
      // btoa("secret")
      "encryptedPassword": "c2VjcmV0",
      "isVIP": true,
      "isBlocked": false,
      "bookLendings": [
        {
          "bookItemId": "book-item-1",
          "bookIsbn": "978-1779501127",
          "lendingData": "2020-04-23"
        }
      ]
    },
    "bob@gmail.com": {
      "email": "bob@gmail.com",
      // btoa("secret")
      "encryptedPassword": "c2VjcmV0",
      "isSuper": true,
      "isBlocked": false,
      "bookLendings": [
        {
          "bookItemId": "book-item-1",
          "bookIsbn": "978-1779501127",
          "lendingData": "2020-04-23"
        }
      ]
    }
  }
}


export const libraryData = {
  "catalog" : catalogData,
  "userManagementData" : userManagementData
}
