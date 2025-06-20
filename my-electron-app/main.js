const { app, BrowserWindow } = require('electron')

const mainWindow = () => {
  const win = new BrowserWindow({
    width: 340,
    height: 300,
    webPreferences: {
        nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  mainWindow()
})
