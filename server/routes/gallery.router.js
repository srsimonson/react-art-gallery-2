const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    
    const galleryId = req.params.id;
    let sqlQuery = `UPDATE "gallery_data" SET "likes" = ("likes"+1) WHERE id = ${galleryId};`
    pool.query(sqlQuery)
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlQuery = `SELECT * FROM "gallery_data" ORDER BY RANDOM();`;
    pool.query(sqlQuery)                                 
    .then((result) => {                                  
        res.send(result.rows);                           
    })
    .catch((error) => {
        console.log(`ERROR with GET in gallery.router, ${sqlQuery}`, error);
    })
}); // END GET Route

module.exports = router;