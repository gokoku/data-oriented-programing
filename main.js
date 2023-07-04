
var catalogData = {
  "booksByIsbn": {
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

const get = (m, path) => {
  let res = m
  path.forEach((key) => {
    res = res[key]
  })
  return res
}

console.log(get(catalogData, ["booksByIsbn", "978-1779501127", "title"]))