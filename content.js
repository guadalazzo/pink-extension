
chrome.storage.sync.get('font', (data) => {
  document.querySelectorAll('h1,p,h2,h3,h4,a,span,svg').forEach(node=> node.style.color = `${data.font}`);
});