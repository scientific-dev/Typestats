const { BrowserWindow, Menu, app, ipcMain } = require("electron");

app.on('ready', () => {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        title: 'Typestats',
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.resizable = false;
    win.loadFile('./app/index.html');
    Menu.setApplicationMenu(null);

    ipcMain.on('minimize', () => win.minimize());
    ipcMain.on('quit', () => app.quit());
});
