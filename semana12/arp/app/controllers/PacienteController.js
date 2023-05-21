const { Paciente } = require('../models');

class PacienteController {
    constructor() {}
  
    async findAll (req, res) {
        try {
            const pacientes = await Paciente.findAll();
            res.status(200).json(pacientes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = req.params.id;
            const paciente = await Paciente.findByPk(id);

            if (paciente) {
                res.status(200).json(paciente);
            } else {
                res.status(404).json({ error: 'Paciente not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async create(req, res) {
        try {
            const newPaciente = await Paciente.create(req.body);
            res.status(201).json(newPaciente);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const [updatedRows] = await Paciente.update(req.body, {
                where: { id },
            });

            if (updatedRows) {
                res.status(200).json({ message: 'Paciente updated successfully' });
            } else {
                res.status(404).json({ error: 'Paciente not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const deletedRows = await Paciente.destroy({
                where: { id },
            });

            if (deletedRows) {
                res.status(200).json({ message: 'Paciente deleted successfully' });
            } else {
                res.status(404).json({ error: 'Paciente not found' });
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
  
  }
  
  module.exports = PacienteController;
  