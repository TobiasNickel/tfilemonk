
require('./index.js')({filename: __dirname+'/data.js'});
const monk = require('monk');


(async () => {
    var db = monk('mongodb://localhost:1231/database');
    var users = db.get('users');
    await users.insert({ name: "tobias" });
    var users = await users.findOne({ name: "tobias" });
    monk.persist();
    console.log('done')
    process.exit();
})().catch(err => console.log(err))