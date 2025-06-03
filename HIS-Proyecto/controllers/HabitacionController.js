'use strict';
const { Habitacion, Ala } = require('../models');

class HabitacionController {
  static async index(req, res) {
    try {
      const habitaciones = await Habitacion.findAll({ include: [{ model: Ala, as: 'ala' }] });
      res.render('habitaciones/index', { habitaciones });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const alas = await Ala.findAll();
      res.render('habitaciones/create', { alas });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async store(req, res) {
    try {
      await Habitacion.create({
        id_ala: req.body.id_ala,
        tipo: req.body.tipo,
        numero: req.body.numero
      });
      res.redirect('/habitaciones');
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async show(req, res) {
    try {
      const habitacion = await Habitacion.findByPk(req.params.id, { include: [{ model: Ala, as: 'ala' }] });
      if (habitacion) {
        res.render('habitaciones/show', { habitacion });
      } else {
        res.status(404).render('error', { message: 'Habitación no encontrada' });
      }
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }
}

module.exports = HabitacionController;