
chrome.storage.sync.get('dancingBack', (data) => {
if (data.dancingBack) {
  let style = document.createElement('style');
  style.setAttribute("id","macaron");
  style.innerHTML =
	'body {' +
		'background: linear-gradient(270deg, #48bdff, #ff0571, #b745c3);' +
		'background-size: 600% 600%;' +
		'animation: AnimationName 5s ease infinite;' +
  '}' +
  '@keyframes AnimationName {'+
    '0% {'+
      'background-position: 0% 50%; }'+
    '50% {'+
      'background-position: 100% 50%; }'+
    '100% {'+
      'background-position: 0% 50%; } }'+
  '@keyframes Animation2 {'+
    '0% {'+
     ' filter: saturate(275%);}'+
   ' 50% {'+
    '  filter: saturate(100%);}'+
   ' 100% {'+
     ' filter: saturate(275%);} '+
    '};';
    document.body.appendChild(style);
    chrome.storage.sync.set({dancingBack: !data.dancingBack});
}
});