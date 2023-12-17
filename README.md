//Antes de comenzar!!!!

Instalar las dependencias ejecutando "npm i" en la carpeta db.

//Conexión a la Base de Datos:
    1º Sustituimos en app.js, la contraseña de la variable connection "Aquí va tu contraseña", por tu contraseña.
    2º Hay que hacer lo mismo en ./dbjs/getPool.js y poner tu contraseña
    3º Iniciamos la base de datos en Workbench.
    4º Ejecutamos "node app.js" en la terminal.

//Registro de Usuarios:

    1º Abrimos Postman y realizamos una consulta en el link "http://localhost:3000/users/register"
    2º Realizamos una consulta tipo "post", utilizamos la sección "body" tipo "raw" en "JSON".
    3º Para comprobar el resultado abrimos y actualizamos nuestra base de dato es Workbench.

//Login de Usuarios:
    1º Abrimos Postman y realizamos una consulta en el link "http://localhost:3000/users/login"
    2º Realizamos una consulta tipo "post", utilizamos la sección "body" tipo "raw" en "JSON".
    3º Para comprobar el resultado abrimos y actualizamos nuestra base de dato es Workbench.

//Realizar un comentario:

    1º Iniciamos la base de datos en Workbench.
    2º Ejectuamos "node app.js".
    3º Realizamos una consulta tipo "post", utilizamos la sección "body" tipo "raw" en "JSON".
    4º Escribimos nuestro comentario.
    5º Para comprobar nuestro comentario utiilizamos un "get".

//Actualizar la contraseña o nombre de los Usuarios:
    1º Abrimos Postman y realizamos una consulta en el link "http://localhost:3000/users/:id"
    2º Realizamos una consulta tipo "post", utilizamos la sección "body" tipo "raw" en "JSON".
    3º Para comprobar el resultado abrimos y actualizamos nuestra base de dato es Workbench.
