import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controllers/categoriesController.js";

// declare router
const categoriesRouter = Router();

// get all Categories router - see all categories, create new category
categoriesRouter.route("/").get(getAllCategories).post(createCategory).all();

// get single category router - update and delete by categoryId
categoriesRouter
  .route("/:categoryId")
  .put(updateCategory)
  .delete(deleteCategory)
  .all();

// export categoriesRouter
export default categoriesRouter;
