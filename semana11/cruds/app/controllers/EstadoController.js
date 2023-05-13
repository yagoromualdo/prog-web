const { Estado } = require('../models');

class EstadoController {
    constructor() {
    }
  
    async findAll (req, res) {
        try {
            const estados = await Estado.findAll();
            res.status(200).json(estados);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const estado = await Estado.findByPk(id);

            if (estado) {
                res.status(200).json(estado);
            } else {
                res.status(404).json({ error: 'Estado not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async create(req, res) {
        try {
            const newEstado = await Estado.create(req.body);
            res.status(201).json(newEstado);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Estado.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Estado updated successfully' });
            } else {
                res.status(404).json({ error: 'Estado not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Estado.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Estado deleted successfully' });
            } else {
                res.status(404).json({ error: 'Estado not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = EstadoController;
  