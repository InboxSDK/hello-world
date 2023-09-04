# InboxSDK Example Extension

<img width="582" alt="readme-example" src="https://user-images.githubusercontent.com/577345/195166155-cb2b35aa-b998-4f21-ad08-5ec1ad851f10.png">

## Instructions

1. Run `npm install` to install dependencies.
2. Run `npm start` to start the development server.
3. In Chrome, go to chrome://extensions, turn on Developer mode, click "Load unpacked", and pick the "dist" directory within this project.
4. Open https://mail.google.com/ and click "Compose an email" at the top left.
5. There's a button added to the Compose view!
6. Open `content.js` to see the code responsible for this.

You can make changes to content.js and the extension will automatically be rebuilt as long as the `npm start` command is still running. If you make any changes, then to apply them you will have to press the ⟳ Reload extension button and then refresh Gmail.

You can run `npm run build` to create an optimized production build of your extension in the "dist" directory.

## Building with your own service worker (background.js) using Webpack (MV3)

In order to utilize InboxSDK while having your own `background.js` service worker, follow the below steps:

1. Add the `scripting` permission to your manifest.json file. A snippet you will add to your service worker file (background.js) will need to use the scripting Chrome API.

```json
{
  "name": "Example Gmail Extension",
  "description": "Example extension showing use of the Streak Gmail SDK",
  "version": "0.1",
  "content_scripts": [
    {
      "matches": [
        "https://mail.google.com/*"
      ],
      "js": ["content.js"],
      "run_at": "document_end"
    }
  ],
  "background": {
    "service_worker": "background.js"
  },
  "permissions": [
    "scripting"
  ],
  "host_permissions": [
    "https://mail.google.com/"
  ],
  "manifest_version": 3
}
```

2. Add the `pageWorld.js` file as an entry to your webpack configuration file. This file is needed in order for the sdk to work. This step will ensure the pageWorld.js file gets included in the resulting extension build/dist folder once compiled.

```json
{
  "entry" : {
    "content": "./src/content.js",
    "pageWorld": "@inboxsdk/core/pageWorld.js",
    "background": "./src/background.js",
  }
}
```

3. Add the following conditional block to your message listener within `background.js`.

```javascript
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'inboxsdk__injectPageWorld' && sender.tab) {
        if (chrome.scripting) {
        // MV3
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            world: 'MAIN',
            files: ['pageWorld.js'],
        });
        sendResponse(true);
        } else {
        // MV2 fallback. Tell content script it needs to figure things out.
        sendResponse(false);
        }
    } if else (...){
        //...
    }
});
```
