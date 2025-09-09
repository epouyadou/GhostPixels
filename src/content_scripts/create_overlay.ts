;(async () => {
  const ghostPixelsContainer = document.createElement('div')
  ghostPixelsContainer.id = 'ghost-pixels-container'
  ghostPixelsContainer.style.position = 'absolute'
  ghostPixelsContainer.style.top = '0'
  ghostPixelsContainer.style.left = '0'
  ghostPixelsContainer.style.width = '100%'
  ghostPixelsContainer.style.height = '100%'
  ghostPixelsContainer.style.pointerEvents = 'none'
  ghostPixelsContainer.style.zIndex = '9999'
  document.body.appendChild(ghostPixelsContainer)

  const src = chrome?.runtime?.getURL('main.js')
  await import(src)
})().catch(console.error)
