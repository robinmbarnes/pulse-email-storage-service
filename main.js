var zmq = require('zmq');

var sub = zmq.socket('sub');
sub.identity = 'Hello'; // set identity to enable durability
sub.connect('tcp://127.0.0.1:8903');
sub.subscribe('');

var sync = zmq.socket('push');
sync.connect('tcp://127.0.0.1:8902');
sync.send('') ;// notify publisher to start sending data

console.log('pulse-email-storage-service is running');

sub.on('message', function (data) {
   var message = data.toString();
   console.log(message);
})