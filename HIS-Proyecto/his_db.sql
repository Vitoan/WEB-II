USE his_db ;

CREATE TABLE alas (
    id_ala INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE habitaciones (
    id_habitacion INT AUTO_INCREMENT PRIMARY KEY,
    id_ala INT NOT NULL,
    tipo ENUM('1_cama', '2_camas') NOT NULL,
    numero VARCHAR(10) NOT NULL,
    FOREIGN KEY (id_ala) REFERENCES alas(id_ala) ON DELETE RESTRICT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE camas (
    id_cama INT AUTO_INCREMENT PRIMARY KEY,
    id_habitacion INT NOT NULL,
    estado ENUM('libre', 'ocupada', 'en_limpieza') DEFAULT 'libre' NOT NULL,
    sexo_ocupante ENUM('M', 'F') DEFAULT NULL,
    FOREIGN KEY (id_habitacion) REFERENCES habitaciones(id_habitacion) ON DELETE RESTRICT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE pacientes (
    id_paciente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(20) NOT NULL UNIQUE,
    fecha_nacimiento DATE NOT NULL,
    sexo ENUM('M', 'F') NOT NULL,
    direccion VARCHAR(100),
    telefono VARCHAR(20),
    contacto_emergencia VARCHAR(100),
    seguro_medico VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_dni (dni)
);

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'recepcionista', 'enfermero', 'medico') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email)
);

CREATE TABLE admisiones (
    id_admision INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT NOT NULL,
    id_cama INT NOT NULL,
    id_usuario INT NOT NULL,
    fecha_admision TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    motivo TEXT NOT NULL,
    estado ENUM('activa', 'cancelada', 'finalizada') DEFAULT 'activa' NOT NULL,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente) ON DELETE RESTRICT,
    FOREIGN KEY (id_cama) REFERENCES camas(id_cama) ON DELETE RESTRICT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE RESTRICT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE historiales_medicos (
    id_historial INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT NOT NULL,
    id_admision INT NOT NULL,
    id_usuario INT NOT NULL,
    alergias TEXT,
    medicamentos TEXT,
    antecedentes TEXT,
    sintomas TEXT,
    signos_vitales JSON,
    plan_cuidados TEXT,
    FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente) ON DELETE RESTRICT,
    FOREIGN KEY (id_admision) REFERENCES admisiones(id_admision) ON DELETE RESTRICT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE RESTRICT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_admision_paciente ON admisiones(id_paciente);
CREATE INDEX idx_historial_admision ON historiales_medicos(id_admision);