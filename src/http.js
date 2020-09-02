const packageJson = require('../package-lock.json');

module.exports = app => {
    app.get('/', (req, res) => {
        const { name, version } = packageJson;
        res.send({ name, version });
    });
};
