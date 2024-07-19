document.addEventListener('DOMContentLoaded', function() {
    var uwuButton = document.getElementById('uwuButton');
  
    uwuButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'replaceText'});
      });
    });
  });
  