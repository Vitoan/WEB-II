'use strict';
const { Admision, Paciente, Cama, Usuario } = require('../models');

class AdmisionController {
  static async index(req, res) {
    try {
      const admisiones = await Admision.findAll({
        include: [
          { model: Paciente, as: 'paciente' },
          { model: Cama, as: 'cama' },
          { model: Usuario, as: 'usuario' }
        ]
      });
      res.render('admisiones/index', { admisiones });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const pacientes = await Paciente.findAll();
      const camas = await Cama.findAll({ where: { estado: 'libre' } });
      const usuarios = await Usuario.findAll();
      res.render('admisiones/create', { pacientes, camas, usuarios });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async store(req, res) {
    try {
      await Admision.create({
        id_paciente: req.body.id_paciente,
        id_cama: req.body.id_cama,
        id_usuario: req.body.id_usuario,
        motivo: req.body.motivo,
        estado: req.body.estado
      });
      // Actualizar estado de la cama a 'ocupada'
      await Cama.update({ estado: 'ocupada', sexo_ocupante: req.body.sexo_ocupante }, { where: { id_cama: req.body.id_cama } });
      res.redirect('/admisiones');
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async show(req, res) {
    try {
      const admision = await Admision.findByPk(req.params.id, {
        include: [
          { model: Paciente, as: 'paciente' },
          { model: Cama, as: 'cama' },
          { model: Usuario, as: 'usuario' }
        ]
      });
      if (admision) {
        res.render('admisiones/show', { admision });
      } else {
        res.status(404).render('error', { message: 'Admisión no encontrada' });
      }
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }
}

module.exports = AdmisionController;