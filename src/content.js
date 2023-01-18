import './appenderSetup';
import * as InboxSDK from "@inboxsdk/core";
import userflow from "userflow.js-self-hosted";

const USERFLOW_TOKEN = "ct_xpup5tsiqvczpkx7svcwjaakze";

InboxSDK.load(2, "Hello World!").then((sdk) => {
  userflow.init(USERFLOW_TOKEN);
  userflow.setPageTrackingDisabled(true);
  userflow.identify("123456", {
    name: "Jane Smith",
    email: "jane@example.com",
    signed_up_at: "2019-06-14T16:25:49Z",
  });

  async function runFlow() {
    await userflow.start("712af796-5835-4910-85c7-7af89f000924");
  }

  globalThis.runFlow = runFlow;

  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler((composeView) => {
    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "My Nifty Button!",
      iconUrl:
        "https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365",
      onClick(event) {
        event.composeView.insertTextIntoBodyAtCursor("Hello World!");
      },
    });
  });
});
