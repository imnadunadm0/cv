function closeLoadingScreen(loadingScreen) {
  loadingScreen.style.transitionDuration = ".5s";
  loadingScreen.style.transitionTimingFunction = "cubic-bezier(0,.75,.25,1)";
  loadingScreen.style.opacity = 0;
  loadingScreen.style.borderRadius = "40px";
  loadingScreen.style.transform = "scale(0.75)";
  loadingScreen.style.cursor = "initial";
  setTimeout(() => {
    loadingScreen.parentNode.removeChild(loadingScreen);
  }, 500)
}

document.body.onload = ()=>{
  lscreen = document.getElementById("loading-screen");
  
  // load any data and call the function "closeLoadingScreen(lscreen)"

  setTimeout(()=>{closeLoadingScreen(lscreen)}, 5000); // FOR DEMO
}