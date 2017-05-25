const electron = require("electron");
const app = electron.app;

const path = require('path');
const url = require('url');

const BrowserWindow = electron.BrowserWindow;

var mainWindow;

app.on('ready',function(){
	mainWindow = new BrowserWindow({width:500, height:560, maximizable: false, resizable: false});
	mainWindow.setMenu(null);
	
	mainWindow.loadURL(url.format({
		pathname : path.join(__dirname, 'app/index1.html'),
		protocol : 'file',
		slashes : true
	}));
});