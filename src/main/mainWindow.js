import BrowserWinHandler from './BrowserWinHandler'

const winHandler = new BrowserWinHandler({
  height: 600,
  width: 1000,
  fullscreen: true
})

winHandler.onCreated(_browserWindow => {

  _browserWindow.setMenuBarVisibility(false) // disable top menu
  winHandler.loadPage('/')
  // Or load custom url
  // _browserWindow.loadURL('https://google.com')
})

export default winHandler
