'use strict';
const { HistorialMedico, Paciente, Admision, Usuario } = require('../models');

class HistorialMedicoController {
  static async index(req, res) {
    try {
      const historiales = await HistorialMedico.findAll({
        include: [
          { model: Paciente, as: 'paciente' },
          { model: Admision, as: 'admision' },
          { model: Usuario, as: 'usuario' }
        ]
      });
      res.render('historiales/index', { historiales });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const pacientes = await Paciente.findAll();
      const admisiones = await Admision.findAll();
      const usuarios = await Usuario.findAll();
      res.render('historiales/create', { pacientes, admisiones, usuarios });
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async store(req, res) {
    try {
      await HistorialMedico.create({
        id_paciente: req.body.id_paciente,
        id_admision: req.body.id_admision,
        id_usuario: req.body.id_usuario,
        alergias: req.body.alergias,
        medicamentos: req.body.medicamentos,
        antecedentes: req.body.antecedentes,
        sintomas: req.body.sintomas,
        signos_vitales: req.body.signos_vitales ? JSON.parse(req.body.signos_vitales) : null,
        plan_cuidados: req.body.plan_cuidados
      });
      res.redirect('/historiales');
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }

  static async show(req, res) {
    try {
      const historial = await HistorialMedico.findByPk(req.params.id, {
        include: [
          { model: Paciente, as: 'paciente' },
          { model: Admision, as: 'admision' },
          { model: Usuario, as: 'usuario' }
        ]
      });
      if (historial) {
        res.render('historiales/show', { historial });
      } else {
        res.status(404).render('error', { message: 'Historial no encontrado' });
      }
    } catch (error) {
      res.status(500).render('error', { message: error.message });
    }
  }
}

module.exports = HistorialMedicoController;