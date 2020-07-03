const rootDiv = document.querySelector('#page-root-div');

function toggleContainerClass() {
  // const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const width = window.innerWidth;
  if (width > 768) {
    rootDiv.classList.add('container');
  }
  rootDiv.classList.remove('container');
}

window.onresize = toggleContainerClass;
// window.addEventListener('resize', (e) => toggleContainerClass());
