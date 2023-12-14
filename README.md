## fhir-server-ui

UI to display FHIR resources in a web browser

## Running UI in local environment

To run the UI in local environment, start the container using `make up`

# To enable hot reload

To enable hot reload for react code, run the command `yarn watch`

Current delay is set to 5sec i.e. after every 5 seconds code changes will be monitered and build will be created if there are changes.

You can change the delay according to your needs for development purposes from package.json
