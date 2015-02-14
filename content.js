InboxSDK.load('1', 'Hello World!').then(function(sdk){

	// the SDK has been loaded, now do something with it!
	sdk.Compose.registerComposeViewHandler(function(composeView){

		// a compose view has come into existence, do something with it!
		composeView.addButton({
			title: "My Nifty Button!",
			iconUrl: 'https://www.streak.com/images/logoLight.png',
			onClick: function(event) {
				event.composeView.insertTextIntoBodyAtCursor('Hello World!');
			},
		});

	});

});
