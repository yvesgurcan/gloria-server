const path = require('path');
const cors = require('cors');
const packageJson = require('../package-lock.json');

module.exports = app => {
    app.get('/index.html', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.get(
        '/',
        cors({
            origin: function (origin, callback) {
                // allow requests with no origin (like mobile apps or curl requests)
                if (!origin) return callback(null, true);
                if (
                    [
                        'http://localhost:3000',
                        'http://localhost:3001',
                        'http://bbt-client-bucket.s3-website-us-west-2.amazonaws.com',
                        'http://bbt-remote-bucket.s3-website-us-west-2.amazonaws.com'
                    ].indexOf(origin) === -1
                ) {
                    const msg =
                        'The CORS policy for this site does not ' +
                        'allow access from the specified Origin.';
                    return callback(new Error(msg), false);
                }
            },
            credentials: true
        }),
        (req, res) => {
            const { name, version } = packageJson;
            res.send({ name, version });
        }
    );
};
