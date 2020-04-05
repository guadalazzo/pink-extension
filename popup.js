let changeColor = document.getElementById('changeColor');
let theme1 = document.getElementById('theme1');
let theme2 = document.getElementById('theme2');
let theme3 = document.getElementById('theme3');
let colorPicker = document.getElementById('color-picker');
let fontPicker = document.getElementById('font-picker');
let clearButton = document.getElementById('clear');

chrome.storage.sync.get('background', function(data) {
  if (data.background) {
    colorPicker.setAttribute('value', data.background);
  }
});
chrome.storage.sync.get('font', function(data) {
  if (data.font) {
    fontPicker.setAttribute('value', data.font);  
  }
});
clearButton.addEventListener('click',function(event) {
  chrome.storage.sync.remove(['backgound','font','dancingBack']);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style=" ";'});
      });
});
fontPicker.addEventListener('change', function(event) {
  event.preventDefault()
  chrome.storage.sync.set({font: event.target.value});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'content.js'});
  });
});

colorPicker.addEventListener('change', function(event) {
  event.preventDefault();
  let color = event.target.value;
  chrome.storage.sync.set({background: event.target.value});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
      });
});

theme1.onclick = function(element) {
  chrome.storage.sync.set({dancingBack: true});

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'animate.js'});
  });
};