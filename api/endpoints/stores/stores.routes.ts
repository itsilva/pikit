/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";
 import * as StoreService from "../../../services/stores/store.service";
 import { BaseStore, Store } from "../../../models/store/store.interface";

/**
 * Router Definition
 */

 export const storesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET All Registered Stores
storesRouter.get("/", async (req: Request, res: Response) => {
    try {
      const stores: Store[] = await StoreService.findAll();
  
      res.status(200).send(stores);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// GET items/:id
storesRouter.get("/:id", async(req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const store: Store = await StoreService.find(parseInt(id));

    if (store) {
      return res.status(200).send(store);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
  
});

// POST items
storesRouter.post("/create", async(req: Request, res: Response) => {
  
  try {
    const store: BaseStore = req.body;
    const newStore = await StoreService.create(store);
    
    res.status(201).json(newStore);
  } catch (e) {
    res.status(500).send(e.message);
  }

});

// PUT items/:id
storesRouter.put("/manage/:id", async(req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const storeDataUpdate: Store = req.body;
    const store: Store = await StoreService.find(parseInt(id));

    if (store) {
      const updatedStore = await StoreService.update(parseInt(id), storeDataUpdate);
      res.status(200).json(updatedStore)
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
})

// DELETE items/:id
storesRouter.delete("/delete/:id", async(req:Request, res: Response) => {
  const { id } = req.params;

  try {
      const store = await StoreService.remove(parseInt(id));

      res.status(200).json({"message": "The store was removed from the list."}); 
  } catch (e) {
      res.status(500).send(e.message);
  }
});