
const { BaseFeature } = require('./feature/base/BaseFeature')
const { TestFeature } = require('./feature/test/TestFeature')



const FEATURE_CLASS = {
   test: TestFeature,

}


class Config {

  makeFeature(fn) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(fn) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Branchio',
        slug: "branchio",
    version: "0.0.1",
    target: "js",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api2.branch.io/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      url: {
      },

    }
  }


  entity = {
    "url": {
      "fields": [
        {
          "name": "alias",
          "type": "`$STRING`"
        },
        {
          "name": "branch_key",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "campaign",
          "type": "`$STRING`"
        },
        {
          "name": "channel",
          "type": "`$STRING`"
        },
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "name": "feature",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "name": "url",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/url",
              "parts": [
                "url"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

module.exports = {
  config
}

