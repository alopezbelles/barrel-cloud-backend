# BACKEND-BARREL-CLOUD
Backend Repository Trip Wise for Barrel Cloud

### Datos generales

**- Autor del proyecto:** Alejandro López Bellés

**- Título del proyecto:** TRIP-WISE, booking planer

**- Fecha:** 29/06/2023

- Tecnologías y dependencias: 

![tecnologias-backend](https://github.com/alopezbelles/barrel-cloud-backend/assets/113507322/d521d2c8-dc8c-4f05-9926-f263808f120e)

### Descripción general del proyecto 

El proyecto consiste en el diseño y desarrollo de una base de datos y una api para la gestión de una plataforma de reservas de viajes. 
d
### Pasos para arrancar el proyecto
- Con  Node.js instalado, clonar el proyecto en el entorno local. 
- Es necesario tener un servidor con MySql en el entorno local.
- Crear una base de datos en su servidor de MySQL con el nombre barrel_cloud_backend (el mismo que especificas en tu archivo .env).
- El resto de las credenciales os las hago llegar por privado.
- Instalar las dependencias con el comando: "npm install". Esto buscará el archivo package.json e instalará las dependencias.
- Con el comando "npx sequelize-cli db:migrate"  se ejecutan  las migraciones y crear las tablas en la base de datos.
- Con el comando "npx sequelize-cli db:seed:all" se migran los seeders de la entidad Bookings. Esto añade tres registros a la base de datos con los que poder previsualizar en el front el funcionamiento inicial de la aplicación.
- Crear un archivo .env en el proyecto con las credenciales que te paso por privado.
- El servidor se arranca con el comando "npm run dev" y se echa abajo con "control+c". El servidor tiene que estar arrancado para que funcione el FrontEnd. 



### Tablas
La base de datos consta de una única tabla. La entidad "Bookings" cuenta con los atributos "id_book", "status", "createdAt", "deletedAt", "description". 


### Endpoints
Para poder ejetutar los endpoints se ejecuta la raiz:
## ** http://localhost:3656

A continuación de esta ruta, se añaden los endpoints con las peticiones GET, POST, PUT y DELETE en el postman o algún servicio similar. 

- GET /newbooking --> Añadirá una nueva reserva a la base de datos..
- POST /getall --> Mostrará el listado con todas las reservas.
- DELETE /delete --> Eliminará una reserva de la base de datos.
       - Se introduce por body: { "id": "id"}, por ejemplo { "id": "1"}.

- PUT /put --> Actualizará el registro en la base de datos.
        - Se introduce por body: { "id": "id", "status":"status"}, por ejemplo { "id": "1", "status":"canceled"}.



