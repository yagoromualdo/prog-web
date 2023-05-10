const { Time } = require('../models');

class TimeController {
    constructor() {
        // Inicialize as propriedades da classe, se necessário
    }

    async findAll(req, res) {
        try {
            const times = await Time.findAll();
            res.status(200).json(times);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

 
    async findById(req, res) {
        try {
            const id = req.params.id;
            const time = await Time.findByPk(id);

            if (time) {
                res.status(200).json(time);
            } else {
                res.status(404).json({ error: 'time not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }


    async create(req, res) {
        try {
            const newTime = await Time.create(req.body);
            res.status(201).json(newTime);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Time.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Time updated successfully' });
            } else {
                res.status(404).json({ error: 'Time not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Time.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Time deleted successfully' });
            } else {
                res.status(404).json({ error: 'Time not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}

module.exports = TimeController;

