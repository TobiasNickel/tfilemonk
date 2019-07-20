
require('./index.js')({ filename: __dirname+'/data.js'});
const monk = require('monk');


(async () => {
    const db = new monk('mongodb://localhost:1231/database');
    const users = db.get('users');
    await users.insert({ name: "tobias" });
    const tobias = await users.findOne({ name: "tobias" });
    monk.persist();
    console.log('done');
    process.exit();
})().catch(err => {
    console.log(err);
    process.exit();
})