const express = require('express');
const app = express();
const PORT = 9090 || process.env.PORT;

// Index route
app.get('/', (req, res) => {
    res.send('Udaan Hiring Challenge');
});

// Require API routes
require('./routes/sceneRoutes')(app);

// Make server listen on PORT:9090
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});