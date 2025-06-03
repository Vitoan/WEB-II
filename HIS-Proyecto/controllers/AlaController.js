'use strict';
const { Ala } = require('../models');

class AlaController {
  // Listar todas las alas
  static async index(req, res) {
    try {
      const alas = await Ala.findAll();
      res.render('alas/index', { alas });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  // Mostrar formulario para crear ala
  static async create(req, res) {
    res.render('alas/create');
  }

  // Guardar nueva ala
  static async store(req, res) {
    try {
      await Ala.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
      });
      res.redirect('/alas');
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  // Mostrar detalles de un ala
  static async show(req, res) {
    try {
      const ala = await Ala.findByPk(req.params.id);
      if (ala) {
        res.render('alas/show', { ala });
      } else {
        res.status(404).render('error', { message: 'Ala no encontrada' });
      }
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }
}

module.exports = AlaController;