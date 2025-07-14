"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDesignAndFeature = void 0;
const getDesignAndFeatureService_1 = require("../../services/Category/getDesignAndFeatureService");
const getDesignAndFeature = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    console.log("clientData👍👍👍👍👍👍👍👍", clientData);
    const designData = yield (0, getDesignAndFeatureService_1.getDesignAndFeatureService)(clientData);
    console.log("designData👍👍👍👍👍👍👍👍", designData);
    return res.status(200).json(designData);
});
exports.getDesignAndFeature = getDesignAndFeature;
//# sourceMappingURL=getDesignAndFeature.controller.js.map