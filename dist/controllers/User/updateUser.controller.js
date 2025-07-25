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
exports.updateUser = void 0;
const updateUserSerivce_1 = require("../../services/User/updateUserSerivce");
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const updateData = req.body;
    console.log(updateData);
    console.log("🎊🎊🎊🎊🎊🎊🎊🎊");
    console.log(userId);
    const user = yield (0, updateUserSerivce_1.updateUserService)(userId, updateData);
    res.status(200).json(user);
});
exports.updateUser = updateUser;
//# sourceMappingURL=updateUser.controller.js.map