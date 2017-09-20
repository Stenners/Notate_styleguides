# Notate

A documentation framework aimed at rapid rollout of style guides and component / pattern libraries.
Pull into your project and customise the baseline content, or pull it apart and make it your own.

## Quickstart
1. Check this repo out into your project, wherever it makes sense. 
2. run `$ yarn`
3. run `$ yarn start`
4. start configuring `src/content/config.yaml`

## How it works
Notate is built on Markdown and React. It's configured via a central YAML file, with content coming from Markdown files in `/src/content`.  
The Markdown is then compiled at build and bundled.  
Pull into your project and customise the baseline content, or pull it apart and make it your own! :boom:

## To Do
* Search
* React & Angular component compatibility
* Unit tests
* Shortcodes for internal components
* Better design
  

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test` 
(doesn't really do anything yet)
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
.
