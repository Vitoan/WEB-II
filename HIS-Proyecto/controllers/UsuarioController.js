'use strict';
const { Usuario } = require('../models');

class UsuarioController {
  static async index(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.render('usuarios/index', { usuarios });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async create(req, res) {
    res.render('usuarios/create');
  }

  static async store(req, res) {
    try {
      await Usuario.create({
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: req.body.contraseña, // Nota: En producción, usa bcrypt
        rol: req.body.rol
      });
      res.redirect('/usuarios');
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async show(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario) {
        res.render('usuarios/show', { usuario });
      } else {
        res.status(404).render('error', { message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }
}

module.exports = UsuarioController;