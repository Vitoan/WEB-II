-- Insertar Alas
INSERT INTO alas (nombre, descripcion) VALUES 
('Medicina Interna', 'Área para pacientes con enfermedades internas'),
('UCI', 'Unidad de Cuidados Intensivos');

-- Insertar Habitaciones
INSERT INTO habitaciones (id_ala, tipo, numero) VALUES 
(1, '1_cama', '101'),
(1, '2_camas', '102'),
(2, '1_cama', '201');

-- Insertar Camas
INSERT INTO camas (id_habitacion, estado, sexo_ocupante) VALUES 
(1, 'libre', NULL),
(2, 'libre', NULL),
(2, 'libre', NULL),
(3, 'libre', NULL);

-- Insertar Usuarios (contraseñas hasheadas con bcrypt más adelante)
INSERT INTO usuarios (nombre, email, contraseña, rol) VALUES 
('Admin', 'admin@hospital.com', 'temp_password', 'admin'),
('Recepcionista', 'recepcion@hospital.com', 'temp_password', 'recepcionista'),
('Enfermero', 'enfermero@hospital.com', 'temp_password', 'enfermero'),
('Medico', 'medico@hospital.com', 'temp_password', 'medico');

-- Insertar Pacientes
INSERT INTO pacientes (nombre, apellido, dni, fecha_nacimiento, sexo, direccion, telefono, contacto_emergencia, seguro_medico) VALUES 
('Juan', 'Pérez', '12345678', '1980-05-15', 'M', 'Calle 123', '555-1234', 'Ana Pérez', 'OSDE'),
('María', 'Gómez', '87654321', '1990-10-20', 'F', 'Av. Libertad 456', '555-5678', 'Luis Gómez', 'Swiss Medical');

-- Insertar Admisiones
INSERT INTO admisiones (id_paciente, id_cama, id_usuario, motivo, estado) VALUES 
(1, 1, 2, 'Dolor torácico', 'activa'),
(2, 2, 2, 'Cirugía programada', 'activa');

-- Insertar Historiales Médicos
INSERT INTO historiales_medicos (id_paciente, id_admision, id_usuario, alergias, medicamentos, antecedentes, sintomas, signos_vitales, plan_cuidados) VALUES 
(1, 1, 3, 'Ninguna', 'Paracetamol', 'Hipertensión', 'Dolor torácico', '{"presion": "120/80", "pulso": 70, "temperatura": 36.5}', 'Monitoreo cada 4 horas'),
(2, 2, 3, 'Penicilina', 'Ninguno', 'Asma', 'Dificultad respiratoria', '{"presion": "110/70", "pulso": 75, "temperatura": 37.0}', 'Oxígeno y control');