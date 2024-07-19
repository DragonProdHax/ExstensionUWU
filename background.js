chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'replaceText') {
      chrome.tabs.executeScript({
        code: `
          document.body.innerHTML = document.body.innerHTML.replace(/\\b\\w+\\b/g, 'UWU');
        `
      });
    }
  });
  