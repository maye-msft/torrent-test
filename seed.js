var Readable = require('readable-stream').Readable
var series = require('run-series')
var WebTorrent = require('webtorrent-hybrid')

var announceUrl = process.argv[2]

seeder = new WebTorrent({ dht: false, torrentPort: 12318})

seeder.on('error', function (err) { console.log(err) })
seeder.on('warning', function (err) { console.log(err) })

var stream = new Readable()
stream._read = function () { }
stream.push('HELLO WORLD2\n')
stream.push(null)

var seederOpts = {
    name: 'hello2.txt',
    pieceLength: 5,
    announce: [announceUrl]
}
seeder.seed([stream], seederOpts, function (torrent) {
    magnetURI = torrent.magnetURI
    console.log(magnetURI);
})