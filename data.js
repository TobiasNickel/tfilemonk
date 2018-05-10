var ObjectID = require('bson-objectid');

module.exports = {
  "localhost:1231": {
    "databases": {
      "database": {
        "collections": [
          {
            "name": "system.namespaces",
            "documents": [
              {
                "name": "system.indexes"
              },
              {
                "name": "users"
              }
            ]
          },
          {
            "name": "system.indexes",
            "documents": [
              {
                "v": 1,
                "key": {
                  "_id": 1
                },
                "ns": "database.users",
                "name": "_id_",
                "unique": true
              }
            ]
          },
          {
            "name": "users",
            "documents": [
              {
                "name": "tobias",
                "_id": ObjectID("5af453c63201d247585b7e86")
              }
            ]
          }
        ]
      }
    }
  }
}