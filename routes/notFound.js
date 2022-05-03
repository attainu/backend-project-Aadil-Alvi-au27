const { Router } = require('express')

const notFoundRoutes = Router()
notFoundRoutes.get('*', function (req, res) {
    res.status(404).redirect('/notFound');
});

module.exports = notFoundRoutes