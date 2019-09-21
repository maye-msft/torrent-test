var Tracker = require('bittorrent-tracker/server')

var tracker = new Tracker({ udp: false, ws: false })

tracker.on('error', function (err) { console.log(err) })
tracker.on('warning', function (err) { console.log(err) })

var series = require('run-series')

tracker.listen(8080, '127.0.0.1', function() {
    var port = tracker.http.address().port
    announceUrl = 'http://localhost:' + port + '/announce'
    console.log(announceUrl);
    
})

// series([
//     function (cb) {
//         tracker.listen(cb)
//     },

//     function (cb) {
//         var port = tracker.http.address().port
//         announceUrl = 'http://localhost:' + port + '/announce'

//         seeder = new WebTorrent({ dht: false })

//         seeder.on('error', function (err) { console.log(err) })
//         seeder.on('warning', function (err) { console.log(err) })

//         var stream = new Readable()
//         stream._read = function () { }
//         stream.push('HELLO WORLD\n')
//         stream.push(null)

//         var seederOpts = {
//             name: 'hello.txt',
//             pieceLength: 5,
//             announce: [announceUrl]
//         }
//         seeder.seed([stream], seederOpts, function (torrent) {
//             magnetURI = torrent.magnetURI
//             cb(null)
//         })
//     }
// }