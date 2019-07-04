'use strict';
// Require Photon
const Photon = require('electron-photon');
// Lop Photon instance
console.log(Photon);

window.addEventListener('activate', event => {
	console.log(event);
});

window.addEventListener('load', () => {
	const componentGroup = document.querySelectorAll('.component-groups')[0];
	componentGroup.addEventListener('activate', function (event) {
		const viewSelector = event.detail.button.getAttribute('data-view');
		const btns = this.querySelectorAll('button');
		for (let i = 0; i < btns.length; i++) {
			document.querySelector(btns[i].getAttribute('data-view')).style.display = 'none';
		}

		document.querySelector(viewSelector).style.removeProperty('display');
	});
	document.querySelectorAll('.btn-show-popup')[0].addEventListener('click', () => {
		Photon.Dialog('#dialog1', {
			width: 600,
			height: 400,
			minHeight: 150,
	  minWidth: 200,
	  vibrancy: 'appearance-based',
	  webPreferences: {
				nodeIntegration: true
			}
		});
	});

	document.querySelectorAll('.btn-show-menu')[0].addEventListener('mousedown', function () {
		Photon.DropDown(this, [
			{
				label: 'Item 1',
				submenu: [
					{
						label: 'Sub Item 1.1',
						click() {
							console.log('Clicked Sub Item 1.1');
						}
					}
				]
			},
			{
				label: 'Item 2',
				submenu: [
					{
						label: 'Sub Item 2.1'
					}
				]
			}
		]);
	});

	// Document.getElementsByClassName("progress-circle")[0].updateCircleProgress(62.5);

	const tabGroup = document.querySelectorAll('tab-group')[0];
	tabGroup.addEventListener('tabActivate', event => {
		console.log(event);
	});
	tabGroup.addEventListener('tabClose', event => {
		console.log(event);
	});
	tabGroup.addEventListener('tabMove', event => {
		console.log(event);
	});
	tabGroup.addEventListener('tabAdd', event => {
		console.log(event);
	});

	window.addEventListener('swipe', event => {
		console.log(event);
	});

	const circularSlider = document.querySelectorAll('circular-slider')[0];
	circularSlider.addEventListener('input', event => {
		console.log(event);
	});
	circularSlider.addEventListener('change', event => {
		console.log(event);
	});

	const messagesView = document.querySelectorAll('messages-view')[0];

	messagesView.add('Hey', {
		type: 'self'
	});
	messagesView.add('What\'s up?', {
		type: 'extern'
	});
	messagesView.add('Look at this!', {
		type: 'self'
	});
	messagesView.add('https://maurice-conrad.eu/acting/images/big-narrenkaefig-5.jpg', {
		type: 'self',
		content: {
			type: 'image/png'
		}
	});
	messagesView.add('https://maurice-conrad.eu/acting/images/big-schach-4.jpg', {
		type: 'extern',
		content: {
			type: 'image/png'
		}
	});
	messagesView.add('https://upload.wikimedia.org/wikipedia/commons/transcoded/4/4b/Lofsöngur.ogg/Lofsöngur.ogg.mp3', {
		type: 'self',
		content: {
			type: 'audio/*'
		}
	});

	window.addEventListener('resize', event => {
		// Console.log(event);
	});

	window.addEventListener('input', event => {
		console.log(event);
	});
});
