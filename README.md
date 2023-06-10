## Descripción

Aplicacion NestJs que genera un endpoint POST para guardar un Usuario en una base de datos Postgresql. Se almacena los datos en 3 entidades diferentes (CLIENTES, DATOS_CONTACTO, CLAVES) donde clientes tiene la relacion a las entidades DATOS_CONTACTO y CLAVES.

## Instalación

```bash
$ npm install
```

## Ejecutar App

```bash
# development
$ npm run start
```

## Post request
Generar una llamada post de la siguiente manera:
```http
POST /usuarios HTTP/1.1
Port: 3000
Content-Type: application/json

{
  "cliente": {
    "nombre": "John Doe"
  },
  "datosContacto": {
    "telefono": "123456789",
    "correo": "john.doe@example.com"
  },
  "claves": {
    "pass": "password123"
  }
}
```

## License

Nest is [MIT licensed](LICENSE).
