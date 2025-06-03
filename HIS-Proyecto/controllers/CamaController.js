'use strict';
const { Cama, Habitacion } = require('../models');

class CamaController {
  static async index(req, res) {
    try {
      const camas = await Cama.findAll({ include: [{ model: Habitacion, as: 'habitacion' }] });
      res.render('camas/index', { camas });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const habitaciones = await Habitacion.findAll();
      res.render('camas/create', { habitaciones });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async store(req, res) {
    try {
      await Cama.create({
        id_habitacion: req.body.id_habitacion,
        estado: req.body.estado,
        sexo_ocupante: req.body.sexo_ocupante || null
      });
      res.redirect('/camas');
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async show(req, res) {
    try {
      const cama = await Cama.findByPk(req.params.id, { include: [{ model: Habitacion, as: 'habitacion' }] });
      if (cama) {
        res.render('camas/show', { cama });
      } else {
        res.status(404).render('error', { message: 'Cama no encontrada' });
      }
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }
}

module.exports = CamaController;