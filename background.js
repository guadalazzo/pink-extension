chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({background: '#ca7ec7', font: '#333333'}, function() { } );
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: '.'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  chrome.storage.sync.remove(['backgound','font']);
});