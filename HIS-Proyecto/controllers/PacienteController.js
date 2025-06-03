const { Paciente } = require('../models');

class PacienteController {
  // Listar todos los pacientes
  static async index(req, res) {
    try {
      const pacientes = await Paciente.findAll();
      res.render('pacientes/index', { pacientes });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  // Mostrar formulario para crear paciente
  static async create(req, res) {
    res.render('pacientes/create');
  }

  // Guardar nuevo paciente
  static async store(req, res) {
    try {
      await Paciente.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        fecha_nacimiento: req.body.fecha_nacimiento,
        sexo: req.body.sexo,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        contacto_emergencia: req.body.contacto_emergencia,
        seguro_medico: req.body.seguro_medico
      });
      res.redirect('/pacientes');
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  // Mostrar detalles de un paciente
  static async show(req, res) {
    try {
      const paciente = await Paciente.findByPk(req.params.id);
      if (paciente) {
        res.render('pacientes/show', { paciente });
      } else {
        res.status(404).render('error', { message: 'Paciente no encontrado' });
      }
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }
}

module.exports = PacienteController;