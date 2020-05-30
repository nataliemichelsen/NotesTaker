# **Note-Taker**

## **Challenge**

The challenge was to create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

## **Requirements**

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

  * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

  * The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new         note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a       way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json`         file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

  * Application should allow users to create and save notes.
  
  * Application should allow users to view previously saved notes.
  
  * Application should allow users to delete previously saved notes.
  
  * The application should be commited to both GitHub and Heroku.

## **Outcome**

Retaining code provided, such as HTML layout, CSS styling, and JS data, 

1) I added what was necessary to by creating additional JS files which defined routes, paths, express data, and fs/util requires. 
2) Then it was necessary to create folders for the routes and their data. These were also saved as JS files. 
3) I needed to add the correct inforation to the JSON package before installing node. 
4) Once node was successfully installed, I began working on installing the necessary additions: util, uuid, path, express, and fs.
5) There was a bug in the code preventing it from loading correctly. Once this was dealt with, I was able to commit and push to GitHub and Heroku.

BONUS) I could make additional changes to the HTML layouts and the CSS styling, which I plan to do around the next portfolio update. 

## **Video of Deployed Application**

![Deployed Application](Images/notesTest.gif)
