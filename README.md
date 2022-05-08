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

