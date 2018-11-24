const mongodb = require('mongo-mock');
const monk = require('monk');
const MongoClient = mongodb.MongoClient;
const STATE = { CLOSED: 'closed', OPENING: 'opening', OPEN: 'open' };

module.exports = function(options){
    mongodb.max_delay = parseInt(options.max_delay) || 0;
    try { MongoClient.load(options.filename || "data.js"); } catch (e) {/* ignore */}
    MongoClient.persist = options.filename || "data.js";

    monk.prototype.open = function (uri, opts = {}, fn) {
        MongoClient.connect(uri, opts, ((err, db) => {
            if (err || !db) {
                this._state = STATE.CLOSED;
                this.emit('error-opening', err);
            } else {
                this._state = STATE.OPEN;
                this._db = db;
                var self = this;
                ['authenticated', 'close', 'error', 'fullsetup', 'parseError', 'reconnect', 'timeout']
                    .forEach(eventName => self._db.on(eventName,  e => self.emit(eventName, e)));
                this.emit('open', db);
            }
            if (fn) { fn(err, this); }
        }).bind(this))
    };

    monk.prototype.persist = function(){
        mongodb._persist();
    };
};