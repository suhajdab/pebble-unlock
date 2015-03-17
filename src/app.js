/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'lan-unlock',
//  icon: 'images/menu_icon.png',
//  subtitle: 'Hello World!',
  body: 'Press up to unlock or down to lock.'
});

main.show();

main.on('click', 'up', function(e) {
	postCommand( 'unlock' );
});

main.on('click', 'down', function(e) {
	postCommand( 'lock' );
});

function onSuccess ( data ) {
	console.log( 'success', data );
}

function onError ( err ) {
	console.log( 'error', err );
}

function postCommand( cmd ) {
	console.log( cmd );
	ajax({ 
		url: 'http://balazs-1337-mbp.local:1976/', 
		type: 'json',
		cache: false,
		method: 'POST',
		data: {
			pin: '0192',
			cmd: cmd
		}
	}, onSuccess, onError );
}