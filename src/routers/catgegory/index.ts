import { Router } from "express";
import getCategory from "../../controllers/Category/getCategory.controller";

const categoryRouter = Router();

categoryRouter.get("/getcategory", getCategory);

export default categoryRouter;