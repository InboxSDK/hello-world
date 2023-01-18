__webpack_public_path__ = chrome.runtime.getURL('');

const _originalAppendChild = Element.prototype.appendChild;

Element.prototype.appendChild = function (el) {
  if (el) {
    if (el.nodeName === 'LINK') {
      if (el.rel === 'modulepreload') {
        // Userflow inserts these preload tags that we can't use anyway
        // because we need to use chrome APIs to load the scripts.
        el.rel = 'preload-disabled';
      }
    } else if (el.nodeName === 'SCRIPT') {
      if (el.dataset.webpack) {
        el.type = 'text/dummy';
        const files = [el.getAttribute('src').replace(__webpack_public_path__, '')];

        chrome.runtime.sendMessage(
          { type: 'load_webpack_script', files },
          (didExecute) => {
            if (!didExecute) {
              console.error("Got bad response from service worker", didExecute);
            }
          }
        );
      }
    }
  }
  return _originalAppendChild.apply(this, arguments);
};
