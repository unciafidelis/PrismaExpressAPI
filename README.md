# PrismaExpressAPI
An API developed in node js with Prisma db in Postgresql and Express


## Errores solucionados

PostgresSQL 13 presenta un error en prisma al momento de la migración 

`Error: db error: ERROR: could not load library "/Library/PostgreSQL/13/lib/postgresql/llvmjit.so": dlopen(/Library/PostgreSQL/13/lib/postgresql/llvmjit.so, 0x000A): Library not loaded: @loader_path/../..//opt/local/lib/libncurses.6.dylib
  Referenced from: /Library/PostgreSQL/13/lib/postgresql/llvmjit.so
  Reason: tried: '/Library/PostgreSQL/13/lib/postgresql/../..//opt/local/lib/libncurses.6.dylib' (no such file), '/usr/lib/libncurses.6.dylib' (no such file)
   0: migration_core::state::DevDiagnostic
             at migration-engine/core/src/state.rs:250`

al ejecutar el comando `npx prisma migrate dev --name init`

Se solucionó instalando PostgresSQL 14, sin desinstalar la versión 13.

Otro punto a tener en cuenta es el encoding elegido al momento de la instalación, se eligió la configuración por defecto y funcionó adecuadamente, si se elige otro solo, tener cuidado del tipo de
datos que se manaejarán en la base de datos.

## Uso de API

En postman utilizamos:

`localhost:3000/missioncommanders` con el método `GET`

```javascript
[
    {
        "id": 2,
        "name": "MissionCommander1",
        "lang": "Woopa1",
        "missionCommander": "Carlo",
        "enrollments": 3,
        "hasCertification": true
    },
    {
        "id": 3,
        "name": "MissionCommander2",
        "lang": "Woopa2",
        "missionCommander": "Fer",
        "enrollments": 2,
        "hasCertification": true
    },
    {
        "id": 12,
        "name": "Explorer11",
        "lang": "twitcher",
        "missionCommander": "Fer",
        "enrollments": 2,
        "hasCertification": true
    },
    {
        "id": 13,
        "name": "MissionCommanderPOST",
        "lang": "Postero",
        "missionCommander": "Postilio",
        "enrollments": 9,
        "hasCertification": true
    },
    {
        "id": 1,
        "name": "MissionCommander",
        "lang": "Woopa3",
        "missionCommander": "MC",
        "enrollments": 0,
        "hasCertification": false
    },
    {
        "id": 4,
        "name": "MissionCommander3",
        "lang": "Dobelerio",
        "missionCommander": "Romarpla",
        "enrollments": 1,
        "hasCertification": true
    }
]
```
`localhost:3000/missioncommanders/1` con el método `GET`

```javascript
  {
    "id": 1,
    "name": "MissionCommander",
    "lang": "Woopa3",
    "missionCommander": "MC",
    "enrollments": 0,
    "hasCertification": false
}
```

`localhost:3000/missioncommanders`con el método `POST`
Para este tenemos que enviar los datos del nuevo registro por `Body`>`raw` configurado como `JSON`

raw

```javascript
  {
    "name": "MissionCommanderPOST",
            "lang": "Postero",
            "missionCommander": "Postilio",
            "enrollments": 9,
            "hasCertification": true
    }
```

y obtenemos como respuesta:

```javascript
{
    "message": "Mission Commander creado."
}
```

`localhost:3000/missioncommanders/4` con el método `PUT`
Para este tenemos el dato `lang` a actualizar por `Body`>`raw` configurado como `JSON`

```javascript
{"lang":"Dobelerio"}
```

y obtenemos como respuesta:

```javascript
{
    "message": "Actualizado correctamente"
}
```
`localhost:3000/missioncommanders/11` con el método `DELETE`

y obtenemos como respuesta:
```javascript
{
    "message": "Eliminado correctamente"
}
```

