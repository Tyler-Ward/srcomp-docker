var mainWebsite = 'https://www.studentrobotics.org';

var http = require('http');
var request = require('request');
addWatcher('compbox stream', watchStream('http://stream:5001', ['team', 'ping']));

addWatcher('compbox API', watchHTTP('http://api/arenas'));

addWatcher('upstream API', watchHTTP(mainWebsite + '/comp-api/arenas'));

addWatcher('upstream sync', function(ack, err) {
    request('http://api/state', function(e, response, body) {
        if (e) {
            err("downstream " + e.message);
        } else if (response.statusCode != 200) {
            err("downstream " + response.statusCode);
        } else {
            var dsState = JSON.parse(body).state;
            request(mainWebsite + '/comp-api/state', function(e, response, body) {
                if (e) {
                    err("upstream " + e.message);
                } else if (response.statusCode != 200) {
                    err("upstream " + response.statusCode);
                } else {
                    var usState = JSON.parse(body).state;
                    if (dsState === usState) {
                        ack();
                    } else {
                        err("DESYNC: upstream " + usState.substr(0, 7) + " " +
                            "downstream " + dsState.substr(0, 7));
                    }
                }
            });
        }
    });
});

addWatcher('IDE', watchHTTP(mainWebsite + '/ide/control.php/info/about'));
