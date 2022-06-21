import { Router } from "express";
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    updateCategory,
} from "../controllers/categoriesController.js"

const categoriesRouter = Router();

categoriesRouter.route("/")
    .get(getAllCategories)
    .post(createCategory)
    .all();
    
    categoriesRouter.route("/:categoryId")
    .put(updateCategory)
    .delete(deleteCategory)
    .all();

export default categoriesRouter;