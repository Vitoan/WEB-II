# WEB-II
Trabajo integrador de WEB II
 
# Modelo de Dominio

## Entidades Principales

## Paciente

-   **id_paciente**  (PK)
    
-   nombre
    
-   apellido
    
-   fecha_nacimiento
    
-   sexo
    
-   documento
    
-   dirección
    
-   teléfono
    
-   email
    
-   contacto_emergencia
    

## Admisión

-   **id_admision**  (PK)
    
-   fecha_admision
    
-   motivo
    
-   estado (activa, cancelada, finalizada)
    
-   tipo_admision (programada, urgencia, derivación)
    
-   **id_paciente**  (FK)
    
-   usuario_registro (FK a Usuario)
    

## Habitación

-   **id_habitacion**  (PK)
    
-   ala
    
-   número
    
-   capacidad (1 o 2 camas)
    

## Cama

-   **id_cama**  (PK)
    
-   **id_habitacion**  (FK)
    
-   estado (libre, ocupada, higienizando)
    
-   sexo_ocupante (null, masculino, femenino)
    

## Internación

-   **id_internacion**  (PK)
    
-   **id_admision**  (FK)
    
-   **id_cama**  (FK)
    
-   fecha_ingreso
    
-   fecha_egreso (null si sigue internado)
    
-   estado (activa, finalizada)
    

## Evaluación de Enfermería

-   **id_evaluacion_enf**  (PK)
    
-   **id_internacion**  (FK)
    
-   fecha
    
-   signos_vitales (puede ser JSON o tabla aparte)
    
-   motivo_internacion
    
-   antecedentes
    
-   plan_cuidados
    
-   usuario_enfermero (FK a Usuario)
    

## Evaluación Médica

-   **id_evaluacion_med**  (PK)
    
-   **id_internacion**  (FK)
    
-   fecha
    
-   diagnóstico
    
-   tratamiento
    
-   observaciones
    
-   usuario_medico (FK a Usuario)
    

## Usuario

-   **id_usuario**  (PK)
    
-   nombre_usuario
    
-   contraseña
    
-   rol (admin, médico, enfermero, recepcionista, etc.)
    

## Relaciones Principales

-   Un  **Paciente**  puede tener muchas  **Admisiones**.
    
-   Una  **Admisión**  está asociada a un solo  **Paciente**.
    
-   Una  **Admisión**  puede generar una  **Internación**.
    
-   Una  **Internación**  ocupa una  **Cama**  (y por ende una  **Habitación**).
    
-   Una  **Cama**  puede estar ocupada por una sola  **Internación**  activa.
    
-   Una  **Internación**  tiene muchas  **Evaluaciones de Enfermería**  y  **Evaluaciones Médicas**.
    
-   Un  **Usuario**  puede registrar admisiones y realizar evaluaciones.
### Modelo de casos de uso
### Front
### Back
### BD