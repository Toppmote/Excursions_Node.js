const Router = require('express')
const router = new Router()
const controller = require("../controllers/excursion.controller")

router.post('/excursions', controller.createExcursion)
router.get('/excursions', controller.getExcursions)
router.post('/excursions', controller.updateExcursion)
router.get('/excursion/delete/:id', controller.deleteExcursion)
router.get('/excursion/:id', controller.getExcursionById)

module.exports = router