"use strict";
// server.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const routers_1 = __importDefault(require("./routers"));
const TokenChecking_1 = require("./services/TokenChecking");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Express session
app.use((0, express_session_1.default)({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
// Passport middleware
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Use middleware (which connects all routes)
app.use('/api', routers_1.default);
app.post('/api/me', TokenChecking_1.TokenChecking);
// Start the server
app.listen(8000, () => {
    console.log('Server running on port 8000');
});
//# sourceMappingURL=app.js.map