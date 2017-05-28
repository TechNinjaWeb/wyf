exports._parse_config_json = {
    server: {
        "databaseURI": "mongodb://localhost:27017/wyf",
        "cloud": "./server/cloud/cloud.js",
        "appName": "DTL Database",
        "appId": "dtl-app",
        "masterKey": "key",
        "serverURL": "http://localhost:3000/parse",
        "port": 1337,
        "liveQuery": {
            "classNames": ["_User", "Test"]
        }
    },
    dashboard: {
        "allowInsecureHTTP": true,
        "apps": [{
            "appId": "dtl-app",
            "appName": "Do This Local Database",
            "masterKey": "key",
            "serverURL": "http://localhost:3000/parse"
        }],
        "port": 4040,
        "users": [{
            "user": "ray",
            "pass": "ray",
            "apps": [{
                "appId": "dtl-app"
            }]
        }],
        "useEncryptedPasswords": false
    }

}
exports.server = require('./parse-server.config.json');
exports.dashboard = require('./parse-dashboard.config.json');