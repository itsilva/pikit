const express = require('express');
const router = express.Router();
const stores = require("../../Store");

/**
 * GET -> return all stores registered on the application
 */
 router.get("/", (req, res) => res.json(stores));

 /**
  * GET -> return a single store registered on the application
  */
 router.get("/:id", (req, res) => {
     const { id } = req.params
     const isValidStore = stores.some(store => store.id === parseInt(id));
 
     if (isValidStore) {
        res.status(200).json(stores.filter((store) => store.id === parseInt(id)));
     } else {
         res.status(404).json({error: `Sorry, the store you looking for does not exist`})
     }
 });

 module.exports = router;