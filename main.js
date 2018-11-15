const { app, BrowserWindow, Menu, } = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {

  win = new BrowserWindow({ width: 1200, height: 700 })

  win.loadURL('http://localhost:4200');

  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, 'src/app/calendar.component.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))

  win.webContents.openDevTools()

  win.on('closed', () => {

    win = null
  })

}

app.on('ready', createWindow)


app.on('activate', () => {

  if (win === null) {
    createWindow()
  }
})

