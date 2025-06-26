import { Router } from "express";
import getCategory from "../../controllers/Category/getCategory.controller";
import { getDesignAndFeature } from "../../controllers/Category/getDesignAndFeature.controller";

const categoryRouter = Router();

categoryRouter.get("/getcategory", getCategory);
categoryRouter.post("/getDesignAndFeature", getDesignAndFeature);

export default categoryRouter;