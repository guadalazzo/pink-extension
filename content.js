
// chrome.storage.sync.get('color', (data) => {
//   document.body.style.backgroundColor = `${data.color}`;
// });


// chrome.storage.sync.get('background', (data) => {
//   document.body.style.backgroundColor = `${data.background}`;
// });

chrome.storage.sync.get('font', (data) => {
  document.querySelectorAll('h1,p,h2,h3,h4,a,span,svg').forEach(node=> node.style.color = `${data.font}`);
});