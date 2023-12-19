//Antes de comenzar!!!!:

Instalar las dependencias ejecutando "npm i" en la carpeta db.

//Conexión a la Base de Datos:

    1º Sustituimos en app.js, la contraseña de la variable connection "Aquí va tu contraseña", por tu contraseña.
    2º Hay que hacer lo mismo en ./dbjs/getPool.js y poner tu contraseña
    3º Iniciamos la base de datos en Workbench.
    4º Ejecutamos "node app.js" en la terminal.

//Registro de Usuarios:

    1º Abrimos Postman y realizamos una consulta en el link "http://localhost:3000/users/register"
    2º Realizamos una consulta tipo "post", utilizamos la sección "body" tipo "raw" en "JSON".
    3º En el body escribimos nuestros datos: 
    {"name": "Tu nombre",
    "email":"ejemplo@gmail.com",
    "password_hash":"Tu contraseña"}
    Todo debe de ir entrecomillado y con una coma al final excepto en la ultima línea. Es importante tener una buena sintaxis para que el código funcione.
    4º Para comprobar el resultado abrimos y actualizamos nuestra base de dato es Workbench y en la tabla de registros debería aparecernos nuestro usuario registrado.

//Login de Usuarios:

    1º Abrimos Postman y realizamos una consulta en el link "http://localhost:3000/users/login"
    2º Realizamos una consulta tipo "post", utilizamos la sección "body" tipo "raw" en "JSON".
    3º En el body escribimos nuestros datos: 
    {"email":"ejemplo@gmail.com",
    "password_hash":"Tu contraseña"}
    4º Para comprobar el resultado abrimos y actualizamos nuestra base de dato es Workbench.

//Realizar un comentario:

    1º Iniciamos la base de datos en Workbench.
    2º Ejectuamos "node app.js".
    3º Realizamos una consulta tipo "post", utilizamos la sección "body" tipo "raw" en "JSON".
    4º Escribimos nuestro comentario con el siguiente codigo:
    {"userId":Id del usuario,
    "commentText":"Ejemplo de comentario",
    "commentDate":"2023-12-17T18:54:18.000"}
    5º Para comprobar nuestro comentario utiilizamos un "get".

//Actualizar la contraseña o nombre de los Usuarios:

    1º Abrimos Postman y realizamos una consulta en el link "http://localhost:3000/users/:id"
    2º Realizamos una consulta tipo "patch", utilizamos la sección "body" tipo "raw" en "JSON" y cambiamos las credenciales que necesitemos:
    {"name":"Otro nombre"}
    3º Para comprobar el resultado abrimos y actualizamos nuestra base de dato es Workbench.
