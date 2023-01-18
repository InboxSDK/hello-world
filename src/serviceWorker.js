chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'load_webpack_script' && sender.tab) {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: message.files,
    });
    sendResponse(true);
  }
});
