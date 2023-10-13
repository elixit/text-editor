// bundle used from facebook regenerator
(() => {
  // Dependencies
  var styles = require(402);
  var styleModule = require(645)()(styles);

  // App shell CSS
  var root = document.documentElement;
  root.style.setProperty('--primary', '#31a9e1');
  root.style.setProperty('--gray', '#ececec');
  root.style.setProperty('--whitesmoke', '#f5f5f5');
  root.style.setProperty('--dark', '#222');
  root.style.setProperty('--monoaki', '#272822');
  root.style.setProperty('--navbar-height', '50px');

  document.body.style.margin = '0';
  document.body.style.backgroundColor = 'var(--monoaki)';
  document.body.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif';

  var heading1 = document.querySelector('h1');
  heading1.style.fontSize = '22px';

  var navbar = document.getElementById('navbar');
  navbar.style.height = 'var(--navbar-height)';
  navbar.style.backgroundColor = 'var(--primary)';
  navbar.style.boxShadow = '1px 1px 1px rgba(0, 0, 0, 0.1)';
  navbar.style.display = 'flex';
  navbar.style.alignItems = 'center';
  navbar.style.justifyContent = 'space-between';
  navbar.style.color = 'white';
  navbar.style.fontSize = '22px';
  navbar.style.fontWeight = '550';
  navbar.style.letterSpacing = '0.9px';

  var navbarBrandImage = document.querySelector('.navbar-brand img');
  navbarBrandImage.style.paddingTop = '10px';

  var loadingSpinner = document.querySelector('.loading-spinner');
  loadingSpinner.style.animationDuration = '0.75s';
  loadingSpinner.style.animationIterationCount = 'infinite';
  loadingSpinner.style.animationName = 'rotate-forever';
  loadingSpinner.style.animationTimingFunction = 'linear';
  loadingSpinner.style.height = '30px';
  loadingSpinner.style.width = '30px';
  loadingSpinner.style.border = '3px solid var(--primary)';
  loadingSpinner.style.borderRightColor = 'transparent';
  loadingSpinner.style.borderRadius = '50%';

  var loadingContainer = document.querySelector('.loading-container');
  loadingContainer.style.display = 'flex';
  loadingContainer.style.justifyContent = 'center';
  loadingContainer.style.alignItems = 'center';
  loadingContainer.style.height = 'calc(100vh - var(--navbar-height))';

  var rotateForeverKeyframes = '@keyframes rotate-forever { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}';
  styleModule(rotateForeverKeyframes);

  var appUpdate = document.querySelector('.app-update');
  appUpdate.style.display = 'none';
  appUpdate.style.position = 'absolute';
  appUpdate.style.right = '10px';

  var navButton = document.querySelector('.nav-btn');
  navButton.style.margin = '25px';

  var button = document.querySelector('.btn');
  button.style.textAlign = 'center';
  button.style.display = 'inline-block';
  button.style.padding = '0.5rem 1.2rem';
  button.style.margin = '0';
  button.style.textDecoration = 'none';
  button.style.fontSize = '1rem';
  button.style.borderRadius = '0.3rem';
  button.style.border = '1px solid transparent';
  button.style.outline = 'none';
  button.style.color = '#1a1a1a';
  button.style.backgroundColor = '#aeaeae';
  button.style.transition = 'color 0.2s ease-in-out, background-color 0.2s ease-in-out';

  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#cecece';
    button.style.cursor = 'pointer';
  });

  var buttonSquared = document.querySelector('.btn.btn-squared');
  buttonSquared.style.borderRadius = '0';

  var buttonSmall = document.querySelector('.btn.btn-sm');
  buttonSmall.style.fontSize = '0.85rem';
  buttonSmall.style.padding = '0.3rem 0.9rem';

  var buttonLarge = document.querySelector('.btn.btn-lg');
  buttonLarge.style.fontSize = '1.25rem';
  buttonLarge.style.padding = '0.8rem 1.4rem';

  var buttonBlock = document.querySelector('.btn.btn-block');
  buttonBlock.style.width = '100%';
  buttonBlock.style.display = 'block';
  buttonBlock.style.textAlign = 'center';

  var buttonPrimary = document.querySelector('.btn.btn-primary');
  buttonPrimary.style.backgroundColor = '#2d3e50';
  buttonPrimary.style.color = '#d9e9e8';

  buttonPrimary.addEventListener('mouseenter', () => {
    buttonPrimary.style.backgroundColor
