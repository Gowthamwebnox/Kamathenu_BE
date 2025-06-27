import { Router } from "express";
import { getDesignAndFeature } from "../../controllers/Category/getDesignAndFeature.controller";
import getCategoryController from "../../controllers/Category/getCategory.controller";

const categoryRouter = Router();

categoryRouter.post("/getAllCategory", getCategoryController);
categoryRouter.post("/getDesignAndFeature", getDesignAndFeature);

export default categoryRouter;