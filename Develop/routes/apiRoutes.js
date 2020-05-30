// define require for fs and util (from server.js)
// reference "store" file location
let fs = require( 'fs' );
let util = require( 'util' );
let store = require( '../db/store.js' );

// set paths (from store.js)
let readFileAsync = util.promisify( fs.readFile );
let writeFileAsync = util.promisify( fs.writeFile );

// set exports
module.exports = function(app) {

// put these INSIDE exports object

// GET
app.get( '/api/notes', function(req, res) {
    store.getNotes().then((data) => {
        // console.log(data)
        return res.json(data);
    });
});

// POST
app.post( '/api/notes', function(req, res) {
    // console.log(req.body)
    store.addNote(req.body).then((note) => {
        // console.log(note)
        return res.json(note);
    });
});

// DELETE
app.delete( '/api/notes/:id', function(req, res){
    // console.log(req.params)
    store.deleteNote(req.params.id).then(() => {
        return res.json( {ok:true} );
    });
});

}