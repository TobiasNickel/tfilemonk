# tfilemonk
use monk(mongodb-wrapper) storing to file for rapid prototyping


## Purpose
The most important phase in each an every project is the start. The start should be as fast as possible. The most projects fail, even before they started. In IT-projects, it is important to get ready and show something. I want you to show something very fast, without even setting up a database. I want you to start coding, before even setup the database. The solution can be this module.

## this module
This module is connecting two great modules. monk and mongo-mock. mongo-mock is simulating an API mostly compatible to the original mongodb, but store data in memory. This data can be persisted to filesystem in a js file.

## usage:
```js
require('tfilemonk')({filename: __dirname+'/data.js'});
const monk = require('monk');

(async () => {
    const db = monk('mongodb://localhost:1231/database');
    const users = db.get('users');
    await users.insert({ name: "tobias" });
    const tobias = await users.findOne({ name: "tobias" });
    monk.persist();
    console.log('done');
    process.exit();
})().catch(err => console.log(err));
```

## disclosure
This module is meant to be used in development, specially when starting a project. You can start using this mongo replacement and later just switch to a real mongo database. Without changing any code, just configure the database and get rid of this module.

I made this module for monk, because I love that module. It has a very clean API. If you want to use the more popular mongoose, no extra module is needed, you can directly use mongo-mock and call mongo-mocks method **_persist**.  

## roadmap
1. It would be good to use different mongo-mock to store in multiple files, but mongo-mock is implemented as a singleton now.
2. use mongo-mock for given collections, so you could try a new feature first within a temporary database instead of polluting the shared database.

PRs are welcome
