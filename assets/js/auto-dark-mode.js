(function(){
  if (window.matchMedia) {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    if (query.matches) {
      // User prefers dark mode
      document.querySelector('html').setAttribute('class', 'dark');
      return;
    } 
    // User prefers light mode
    document.querySelector('html').classList.remove('dark');
  }
})()

