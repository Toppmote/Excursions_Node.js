const db = require('../db')

class ExcursionController {

    async createExcursion(req, res) {
        const {name, description, date, city_id, guide_id} = req.body
        const newExcursion = await db.query('insert into excursions (name, description, date, city_id, guide_id) ' +
            'values ($1, $2, $3, $4, $5) RETURNING *', [name, description, date, city_id, guide_id])
        res.json(newExcursion.rows[0])
    }

    async deleteExcursion(req, res) {
        const id = req.params.id
        await db.query('delete from excursions where id = $1', [id])
        res.json('deleted')
    }

    async updateExcursion(req, res) {
        const {id, name, description, date, city_id, guide_id} = req.body
        const updatedExcursion = await db.query('update excursions set name = $1, description = $2, date = $3, city_id = $4, guide_id = $5) ' +
            'where id = $6 RETURNING *', [name, description, date, city_id, guide_id, id])
        res.json(updatedExcursion.rows[0])
    }

    async getExcursions(req, res) {
        const excursions = await db.query('select * from excursions')
        res.render('excursions.html', {excursions: excursions.rows})
    }

    async getExcursionById(req, res) {
        const id = req.params.id
        const excursion = await db.query('select * from excursions where id = $1', [id])
        res.render('excursion_details.html', {excursion: excursion.rows[0]})
    }

}

module.exports = new ExcursionController()