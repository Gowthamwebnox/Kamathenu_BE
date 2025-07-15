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
exports.particularProductService = void 0;
const client_1 = require("../../generated/prisma/client");
const getDesignAndFeatureService_1 = require("../Category/getDesignAndFeatureService");
const prisma = new client_1.PrismaClient();
const particularProductService = (clientData) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, limit } = clientData;
    const product = {
        particularProduct: '',
        similerProduct: [],
    };
    console.log(id);
    const fetchProduct = yield prisma.product.findUnique({
        where: {
            id: id,
        },
        include: {
            reviews: {
                include: {
                    user: true,
                },
            },
            productDetails: true, // includes the ProductDetails records
            images: true,
            category: true,
            discounts: true,
            seller: true,
        },
    });
    product.particularProduct = fetchProduct;
    const fetchSimilerProduct = yield (0, getDesignAndFeatureService_1.getDesignAndFeatureService)(clientData);
    product.similerProduct = fetchSimilerProduct;
    return product;
});
exports.particularProductService = particularProductService;
//# sourceMappingURL=particularProductService.js.map