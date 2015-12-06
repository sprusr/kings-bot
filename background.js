var sniping = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  //if(!sniping) {
    sniping = true;
    chrome.tabs.executeScript(tab.ib, { file: "jquery.js" }, function() {
      chrome.tabs.executeScript(tab.ib, {
    		file: 'inject.js'
    	});
    });
  //}
});
