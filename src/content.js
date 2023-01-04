import * as InboxSDK from '@inboxsdk/core';
import { Configuration, OpenAIApi } from "openai";

const apiKey = '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';

async function generateText(prompt) {
  

  // Make the API request
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
       'Authorization': `Bearer ${apiKey}`,
       'Access-Control-Allow-Origin': '*'
     },
     body: JSON.stringify({
       "model": "text-davinci-002",
       "prompt": prompt,
       "max_tokens": 2048
     })
  });
  const json = await response.json();
  console.log(json.choices.text)
  console.log(json)
  console.log(json.choices)
  console.log(json.choices["0"].text)


  return json.choices["0"].text;

}

InboxSDK.load(2, "Hello World!", { timeout: 30000 }).then((sdk) => {
  sdk.Compose.registerComposeViewHandler((composeView) => {
    composeView.addButton({
      title: "Generate Email Response",
      iconUrl:
        "https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365",
      onClick(event) {
        // Create a form element
        const form = document.createElement('form');
        form.innerHTML = `
          <label for="prompt">What is the email about?</label><br>
          <input type="text" id="prompt" name="prompt"><br>
          <input type="submit" value="Generate Email">
        `;
        // Add the form to the compose view
        event.composeView.insertHTMLIntoBodyAtCursor(form);

        // Add a submit event listener to the form
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          // Get the value of the prompt input field
          const prompt = form.querySelector('#prompt').value;

          // Declare the response variable
          let response;
          // Generate the email response
          response = await generateText(prompt);
          console.log("m")
          console.log(response)
          console.log("i")

          form.remove();
          console.log(response)
          // Insert the email response into the compose view
          event.composeView.insertHTMLIntoBodyAtCursor(`<div>${response}</div>`);

          
          
        });
      },
   

    });
  });
});
