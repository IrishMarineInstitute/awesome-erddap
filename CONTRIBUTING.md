# Contributing

## Contributing to the Awesome List

Please ensure your pull request adheres to the following guidelines:

- Search previous suggestions before making a new one, as yours may be a duplicate.
- Make an individual pull request for each suggestion.
- Use the following format: `[NAME](LINK) - descriptive sentence maybe with relevant links.`
- New categories, or improvements to the existing categorization are welcome.
- Keep descriptions short and simple, but descriptive.
- Check your spelling and grammar.
- Make sure your text editor is set to remove trailing whitespace.

Thank you for your suggestions! <3

## Contributing to the Erddap List JSON file

Please ensure your pull request adheres to the following guidelines:

- Search the JSON object to make sure you're not duplicating existing entries
- The JSON file is an array of objects. Add a new object for your server
- Ensure you've added a name, a url and a public attribute to your object. No more and no less
- Check the url is correct with respect to http:// or https://
- Please validate your JSON object against the [schema](/json-schema/ErddapInstancesSchema.json) using a tool such as [this one](https://www.jsonschemavalidator.net/).
- If you have access to Node.JS, run `npm run build` to synchronise the `erddaps.js` file from your newly edited `erddaps.js` file
- If you have access to Node.JS, run `npm test` to perform the unit tests tests which are run are:
-- Does the `README.md` file pass `awesome-lint`
-- Does `erddaps.json` meet the JSON schema
-- Equivalence in the data between the `erddaps.json` and `erddaps.js` files