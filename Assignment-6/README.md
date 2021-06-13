
## Create a simple Todo application using JavaScript. 
## Stack : Javascript, scss

## User Requirements:

    As a user, I should be able to see all to-do items fetched using an XHR call from a JSON file.
    As a user, I should be able to click a to-do item and able to see its detailed view.
    As a user, I should be able to open add a new to-do item view by clicking the add button and this need not be persisted.
    As a user, I should be able to add a to-do item by entering the title, description, due date, and time.
    As a user, I should be able to mark a to-do item as complete.

## Technical Requirements:

    The goal of this assignment is to learn about JavaScript
    Should use SCSS for styles.
    Can use npm http-server for running the project.
    Should document your code extensively.
    Should have .gitignore, ReadMe.md files.
    ReadMe.md file should have markdown with project description and instructions to run the project.
    No JavaScript & CSS libraries should be used for this assignment.
    You do not need to save the changes made on UI to json file.

## Steps to run:
If changes done in the scss files do the following : 
* install sass 
`npm -i save node-sass`

* Edit package.json script to "sass" : "node-sass scss /main.scss --output dist/styles"

* run the sass
`npm run sass`

If no changes, just do the following :

* Finally run the to-do-list.html from live server