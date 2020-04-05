let theme1 = document.getElementById('theme1');
let theme2 = document.getElementById('theme2');
let colorPicker = document.getElementById('color-picker');
let fontPicker = document.getElementById('font-picker');
let clearButton = document.getElementById('clear');
let imageInput = document.getElementById('image');

chrome.storage.sync.get('background', function(data) {
    colorPicker.setAttribute('value', data.background);
});
chrome.storage.sync.get('font', function(data) {
  if (data.font) {
    fontPicker.setAttribute('value', data.font);  
  }
});
chrome.storage.sync.get('dancingBack', function(data) {
  if (data.dancingBack) {
    theme1.setAttribute('value', data.dancingBack);  
  }
});
chrome.storage.sync.get('anchorsBack', function(data) {
  if (data.anchorsBack) {
    theme2.setAttribute('value', data.anchorsBack);  
  }
});
chrome.storage.sync.get('imageBack', function(data) {
  if (data.imageBack) {
    imageInput.setAttribute('value', data.imageBack);  
  }
});
/* ----- clear ----- */
clearButton.addEventListener('click',function(event) {
  chrome.storage.sync.remove(['backgound','font','dancingBack','anchorsBack', 'imageBack']);
  imageInput.value= "";
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'clear.js'});
      });
});
/* ----- fontcolor picker ----- */

fontPicker.addEventListener('change', function(event) {
  event.preventDefault()
  chrome.storage.sync.set({font: event.target.value});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'content.js'});
  });
});
/* ----- background picker ----- */

colorPicker.addEventListener('change', function(event) {
  event.preventDefault();
  let color = event.target.value;
  chrome.storage.sync.set({background: event.target.value});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";document.getElementById("content").style.backgroundColor = "' + color + '"'});
      });
});
/* ----- dancing back  ----- */

theme1.onclick = function(event) {
  chrome.storage.sync.set({dancingBack: true});
  chrome.storage.sync.get('dancingBack', function(data) {
  })
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'animate.js'});
  });
};

/* ----- anchors heroku back  ----- */

theme2.onclick = function(event) {
  chrome.storage.sync.set({anchorsBack: true});
  chrome.storage.sync.get('anchorsBack', function(data) {
  })
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'anchorsBack.js'});
  });
};


/* ----- image background  ----- */

imageInput.addEventListener('change', function(event) {
  let imageUrl = event.target.value;
  chrome.storage.sync.set({imageBack: event.target.value});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundImage = "url(' + imageUrl + ')";document.body.style.backgroundSize = "contain";'});
      });
});