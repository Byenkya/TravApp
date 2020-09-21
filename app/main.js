const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.maximize();
    // mainWindow.setMenu(null);
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: 'file',
            slashes: true
        })
    )
})