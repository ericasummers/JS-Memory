##Javascript Project Setup

* Create initial scripts pages and html, separate interface and business logic.
* Link interface and business logic with module and require statements.
* Create .gitignore file for node_modules and DS_Store
* Set up and initialize npm: `npm init` which creates package.json
* Enter title to set up gulpfile and hit enter.
* Install gulp with command `npm install gulp --save-dev`
* Install Browserify with command `npm install browserify --save-dev`
* Set up gulpfile.js to require gulp
* Install vinyl-source stream with command `npm install vinyl-source-stream --save-dev`
* Require browserify and vinyl-source-stream on gulpfile and write tasks
* Update html to link to build app.js file
* Install gulp-concat to link interfaces with command `npm install gulp-concat --save-dev`
* Update jsBrowserify to concat files and add concat task
* Install uglify to minify files with command `npm install gulp-uglify --save-dev`
* Write gulp tasks to minify and concat
* Set up environment variables by installing gulp-util with command `npm install gulp-util --save-dev`
* Set up variables for utilities and buildProduction, create task to build production or development environment
* Install del-package to clean environment by using command `npm install del --save-dev`
* Create task to clean by deleting build and tmp files, add to build task
* Set up JSHint to lint by using command `npm install jshint --save-dev` and `npm install gulp-jshint --save-dev`
* Create task to lint js files with jshint
* Run `gulp jshint` to check for errors/problems in js code
* Run `gulp build` or `gulp build --production` to run gulp and create app.js file

* Set up Bower with command `npm install bower -g`
* Initialize bower with command `bower init` to create bower.json
* Install jquery through bower with the command `bower install jquery --save`
* Install bower packages with command `bower install`
* Add bower_components folder to gitignore and update jquery scripts link to go to bower_components folder
* Install bootstrap with command `bower install bootstrap --save`
* Link to bootstrap on html page after jquery
* Install moment.js through bower with command `bower install moment --save`
* Link to moment.js on html file with script tag

* Install gulp package 'bower-files' with command `npm install bower-files --save-dev`
* Set up bower-files package on gulpfile and create task to store dependencies and combine into one vendor.js file
* Run `gulp bowerJS` to add new Javascript front-end dependencies
* Add build and tmp folders to gitignore
* Add CSS link and CSS task to gulpfile
* Update library require to locate bootstrap packages
* Create gulp task to combine bower JS and CSS
* Update build task to include bower start

* Install BrowserSync for development server with command `npm install browser-sync --save-dev`
* Require BrowserSync on gulpfile and create serve task
* Run `gulp serve` from top level project directory to launch server and run app
* Add watcher to serve task to monitor development js files and run jsBuild on changes, create jsBuild task
* Add watcher for bower files
* Add watcher for html files to reload server every time html pages are updated

* Keep API keys separate in a local .env file, add .env to .gitignore and require link on js
* Include instructions on readme to create .env with unique API key
