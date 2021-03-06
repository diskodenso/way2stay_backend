import Category from "../models/Category.js";

// --- CREATE NEW CATEGORY CONTROLLER --- //
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({ name });
    res.status(201).json({ category: newCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- GET ALL CATEGORIES CONTROLLER --- //
export const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.status(200).json({ categories: allCategories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- UPDATE SINGLE CATEGORY BY CATEGORYID CONTROLLER --- //
export const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = {
      name,
      modifiedAt: new Date(),
    };
    const resUpdatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updatedCategory,
      { new: true }
    );
    res.status(200).json({ category: resUpdatedCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --- DELETE SINGLE CATEGORY BY CATEGORYID CONTROLLER --- //
export const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    await Category.findByIdAndDelete(categoryId);
    res.status(200).send("Category successfully deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
