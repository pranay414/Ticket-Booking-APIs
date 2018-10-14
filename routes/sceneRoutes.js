module.exports = (app) => {
    app.post('/scene', (req, res) => {
        res.send('Scene endpoint hit!')
    });
};