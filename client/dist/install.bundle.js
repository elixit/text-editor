(() => {
  // Define regeneratorRuntime to handle async/await (used by Babel)
  var regeneratorRuntime = requireRegeneratorRuntime().default;

  // Function to conditionally determine the type of a variable
  function requireRegeneratorRuntime() {
    return typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && typeof Symbol === "function" && t.constructor === Symbol && t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        };
  }

  // Get the install button element by its ID
  var installButton = document.getElementById("buttonInstall");

  // Function to handle the install button click
  function handleClick() {
    // Prompt the user to install the app
    deferredPrompt.prompt();
    window.deferredPrompt = null; // Clear the prompt
    installButton.classList.toggle("hidden", true); // Hide the install button
  }

  // Event listener for the "beforeinstallprompt" event
  window.addEventListener("beforeinstallprompt", function (event) {
    console.log("Before Install Prompt event");
    console.log("Event: " + event);
    
    // Prevent the default behavior of the prompt
    event.preventDefault();
    
    // Store the install prompt event
    window.deferredPrompt = event;
    
    // Show the install button
    installButton.classList.toggle("hidden", false);
  });

  // Event listener for the install button click
  installButton.addEventListener("click", function () {
    if (window.deferredPrompt) {
      // If there's a deferred prompt, handle the click
      handleClick();
    }
  });

  // Event listener for the "appinstalled" event
  window.addEventListener("appinstalled", function (event) {
    console.log("App Installed event");
    
    // Clear the deferred prompt event
    window.deferredPrompt = null;
  });
})();
