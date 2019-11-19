Goal
set up a dev environment for auto load of html, css and javascript on changes.
scss files are transpiled with saas and placed in the appropriate directory
ts typescript files are compliled to javascript and placed in the appropriate folder

    watches are placed on the scss and ts files to trigger transpiling.
    live-server triggers and reload of the index page in the dist directory on changes

Prerequisties:
set up dir structure and install required software. Files under the src folder are transpiled and place
in the dist folder

    root
        -dist
            -css
            -scripts
        -src
            -saas
            -ts

    Software:

    global - live-server, eslint, typescript
    local - eslint, typescript, prettier

    user wwizards to create configuration files for typescript and eslint
    tsc --init
    eslint --init -y

    add scripts to the package.json file for build/watch commands for saas,tsc & live-server

        "sass": "sass --watch src/sass:dist/css",
        "tsc": "tsc --watch",
        "live-server": "live-server dist"

    add configuration information to
        tsconfig.json, eslintrc

    add a prettier configuration file and add rules as needed
        .prettierrc.json

Expections:        

live-server on the dist folder watches for changes and reloads the index.html from the dist folder.
sass --watch src/saas:dist/css watches for changes to the css then recompiles css
tsc --watch - watches for changes in the typescript folder then transpiles. 

The changes are then detected by live server and the index page is reloaded. As the new page is loaded
newly created css rules and functions in the javascript file are executed and displayed in the browser.

all three can be launched from scripts listed in the package.json file where the command syntax and execution path are defined.

Each watch/complile service will run in its own console window.

How to run watch services:

open a console window and split into three panes. Run each of the following commands, one pane each

npm run live-server
npm run sass
npm run tsc

ctr-c to stop the watch/compile service and crt-d to close the terminal window/pane

the live server listens for changes in the dist folder and reloads the index page as changes are saved.

the sass function compiles changes in the src/styles.scss file and transpiles the changes to css in the dist folder. The change then triggers live-reload of the index page.

the tsc command is watching for changes in the src/app.ts file and transpiles into javascript in the dist/script folder on change. This also triggers live-server to reload the web page.
