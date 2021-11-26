const tabs = Array.from(document.querySelectorAll('.tab'))
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {tab.classList.remove('active')})
    tab.classList.add('active')
    
  })
})