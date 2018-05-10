# tfilemonk
use monk(mondodb-wrapper) storing to JSON-file for rappid prototyping


## Purpose
The most imporant phase in each an every project is the start. The start should be as fast as possible. In IT-projects, it is important to get ready and show something. I want you to show something very fast, without even setting up a database. I want you to start coding, before even setup the database. The solution can be this module.

## this module
This module is connecting two great modules. monk and mongo-mock. mongomock is simulating an API mostly compatible to the original mongodb, but store data in memory. This data can be persisted to filesystem in a js file.

## usage:
```js

require('./index.js')({filename: __dirname+'/data.js'});
const monk = require('monk');


(async () => {
    var db = monk('mongodb://localhost:1231/database');
    var users = db.get('users');
    await users.insert({ name: "tobias" });
    var users = await users.findOne({ name: "tobias" });
    monk.persist();
    console.log('done');
    process.exit();
})().catch(err => console.log(err));

```

## desclosure
this module is meant to be used in development, specially when starting a project. you can start using this mongo replacement and later just switch to a real mongo database. Without changing any code, just configure the database and get rid of this module.

I made this module for monk, because I love that module. Is has a very clean API. If you want to use the more popular mongoose, no extra module is needed, you can just intialize it using mongo-mock and call mongo-mocks method **_persist**.