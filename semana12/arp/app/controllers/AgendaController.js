const { Agenda } = require('../models');
const { Paciente } = require('../models');

class AgendaController {
    constructor() {}

    async findAll(req, res) {
        try {
            const agendas = await Agenda.findAll();
            res.status(200).json(agendas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

 
    async findById(req, res) {
        try {
            const agenda = await Agenda.findByPk(req.params.id, {
                include: { model: Paciente, as: 'paciente' }
            });
    
            if (!agenda) {
                return res.status(404).json({ error: 'Agenda not found' });
            }
            res.json(agenda);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const newAgenda = await Agenda.create(req.body);
            res.status(201).json(newAgenda);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Agenda.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Agenda updated successfully' });
            } else {
                res.status(404).json({ error: 'Agenda not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Agenda.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Agenda deleted successfully' });
            } else {
                res.status(404).json({ error: 'Agenda not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

}

module.exports = AgendaController;

