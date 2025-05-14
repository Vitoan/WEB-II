# WEB-II
Trabajo integrador de WEB II
 
# Modelo de Dominio

## Entidades Principales

📘 Entidades y Atributos
🧍 Paciente

    id_paciente (PK)

    nombre

    apellido

    fecha_nacimiento

    sexo

    documento

    dirección

    teléfono

    email

    contacto_emergencia

🏥 Admisión

    id_admision (PK)

    fecha_admision

    motivo

    estado (activa, cancelada, finalizada)

    tipo_admision (programada, urgencia, derivación)

    id_paciente (FK)

    usuario_registro (FK a Usuario)

🛏️ Habitación

    id_habitacion (PK)

    ala

    número

    capacidad (1 o 2 camas)

🛋️ Cama

    id_cama (PK)

    id_habitacion (FK)

    estado (libre, ocupada, higienizando)

    sexo_ocupante (null, masculino, femenino)

🏨 Internación

    id_internacion (PK)

    id_admision (FK)

    id_cama (FK)

    fecha_ingreso

    fecha_egreso (null si sigue internado)

    estado (activa, finalizada)

🩺 Evaluación de Enfermería

    id_evaluacion_enf (PK)

    id_internacion (FK)

    fecha

    signos_vitales (puede almacenarse como JSON o en una tabla separada)

    motivo_internacion

    antecedentes

    plan_cuidados

    usuario_enfermero (FK a Usuario)

🧑‍⚕️ Evaluación Médica

    id_evaluacion_med (PK)

    id_internacion (FK)

    fecha

    diagnóstico

    tratamiento

    observaciones

    usuario_medico (FK a Usuario)

👤 Usuario

    id_usuario (PK)

    nombre_usuario

    contraseña

    rol (admin, médico, enfermero, recepcionista, etc.)
### Modelo de casos de uso
Actores del sistema 🎭
| Actor         | Descripción breve                                        |
| ------------- | -------------------------------------------------------- |
| Administrador | Gestiona usuarios, configuraciones y controla el sistema |
| Médico        | Realiza diagnósticos, prescribe tratamientos             |
| Enfermero     | Registra signos vitales, ayuda en atención básica        |
| Paciente      | Es admitido, internado, evaluado y dado de alta          |
| Recepcionista | Admite pacientes y crea su ficha inicial                 |

Entidades principales 🧱
| Entidad         | Atributos clave                                               |
| --------------- | ------------------------------------------------------------- |
| **Paciente**    | id, nombre, apellido, DNI, fechaNacimiento, género, dirección |
| **Internación** | id, idPaciente, fechaIngreso, fechaAlta, motivo               |
| **Evaluación**  | id, idInternación, tipo (médica/enfermería), fecha, notas     |
| **Habitación**  | id, número, tipo, disponibilidad                              |
| **Diagnóstico** | id, idEvaluacion, detalle                                     |
| **Tratamiento** | id, idDiagnóstico, medicamento, dosis, frecuencia             |
| **Usuario**     | id, nombreUsuario, contraseña, rol                            |

Relaciones entre entidades

-    Un Paciente puede tener muchas Internaciones

-   Una Internación tiene muchas Evaluaciones

-    Una Evaluación puede ser de tipo médica o de enfermería

-    Una Evaluación médica genera un Diagnóstico

-    Un Diagnóstico puede generar muchos Tratamientos

-    Una Internación se asocia a una Habitación

-    Un Usuario puede registrar Evaluaciones
### Front
### Back
### BD