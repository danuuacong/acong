const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 500,
    height: 700
  });

  win.loadFile('index.html');
});
