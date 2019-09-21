


var WebTorrent = require('webtorrent-hybrid')

var client = new WebTorrent({ dht: false, torrentPort: 12319 })
var magnetURI = "magnet:?xt=urn:btih:4ae83c8fcd2750f072349131010bb1daca0492eb&dn=hello.txt&tr=http%3A%2F%2F13.67.77.92%3A41149%2Fannounce&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"
client.on('error', function (err) { console.log(err) })
client.on('warning', function (err) { console.log(err) })
console.log(magnetURI);

client.add(magnetURI, function (dl) {

  dl.files[0].getBuffer(function (err, buf) {
    console.log(buf.toString('utf8'))
  })
})