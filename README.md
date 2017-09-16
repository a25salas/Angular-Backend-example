# mysqlapi

# EJEMPLO DE REST API UNA CONECTADO A BASE DE DATOS MYSQL CON SAILS.JS Y EL ORM WATERLINE.

##Para montar el ambiente
-tener instalado node.js
-Ejecutar desde el CMD los siguientes comandos

instalar sails.js global= npm install –g sails
instalar mysqldriver local= npm install sails-mysql
instalar waterline= npm install waterline
instalar la paqueteria general= npm install

Con eso se tiene el ambiente instalado.

##Para correr

ejecutar desde el cmd node app.js corre en el puerto 1337

la ruta para acceder al API desde algun programa como POSTMAN: 

```javascript
{
"GET localhost:1337/customer/" :Obtiene todos los datos
"POST localhost:1337/customer/" : Enviar el en BODY JSON y guarda datos.
"POST localhost:1337/customer/1" :Enviar el en BODY JSON y actualiza  datos del ID 1.
"DELETE localhost:1337/customer/1" : Elimina datos del ID 1.
}

```

