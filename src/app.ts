// server.ts

import express from 'express';
import session from 'express-session';
import passport from 'passport';
import middleware from './routers';

const app = express();

// Express session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use middleware (which connects all routes)
app.use('/api',middleware);

// Start the server
app.listen(8000, () => {
    console.log('Server running on port 8000');
});
