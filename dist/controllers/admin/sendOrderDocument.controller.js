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
exports.sendOrderDocument = void 0;
const sendOrderDocumentService_1 = require("../../services/admin/sendOrderDocumentService");
const sendOrderDocument = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderDocument = req.body;
        const userDocument = yield (0, sendOrderDocumentService_1.sendOrderDocumentService)(orderDocument);
        res.status(200).json({ message: "Order document sent successfully", userDocument });
    }
    catch (err) {
        res.status(500).json({ message: "Failed to send order document" });
    }
});
exports.sendOrderDocument = sendOrderDocument;
//# sourceMappingURL=sendOrderDocument.controller.js.map