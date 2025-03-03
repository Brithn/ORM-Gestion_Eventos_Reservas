Gestión de Eventos y Reservas
Un sistema para gestionar reservas de eventos con detalles de los asistentes.

Modelo Entidad-Relación (ERD)
Evento (id, nombre, fecha, lugar)
Asistente (id, nombre, email)
Reserva (id, eventoId (FK), asistenteId (FK), fecha_reserva) (Relación muchos a muchos: un asistente puede reservar varios eventos y un evento puede tener muchos asistentes)

Esnecesario crear un contenedor de postgres con pgadmin, lo puedes hacer en el puerto 5050, crear tu servidor y base de datos. Las conexiones se manejan desde un archivo .env, postgres.js, junto con config.js los cuales manejan las credenciales de nuestra base de datos.

*/ Comando para ejecutar un nuevo contenedor para PostgreSQL*/

docker-compose up -d db
docker-compose up -d pgadmin

*/ Comando para ejecutar el proyecto*/

npm run dev

*/ Comando para ejecutar las migraciones*/

npx sequelize-cli migration:generate --name create_event_table
npx sequelize-cli migration:generate --name create_assitant_table
npx sequelize-cli migration:generate --name create_reserva_table

*/ Comando para actualizar una  tabla con una nueva columna, la migración*/

npm run migrations:generate add-nombreColumna

*/ Para actualizar una columna o agregarla en caso de que no este*/

npm run migrations:generate -n update-nombreMigracion

*/ Para ejecutar una migración*/

npm run migration:run

*/ para deshacer las migraciones*/
npx sequelize-cli db:migrate:undo:all

Enlace de repositorio en github : 
  - https://github.com/Brithn/ORM-Gestion_Eventos_Reservas.git
Endpoints:
  - http://localhost:3000/api/v1/reservas
  - http://localhost:3000/api/v1/asistentes
  - http://localhost:3000/api/v1/eventos


