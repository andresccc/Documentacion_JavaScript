## CONFIGURACIÓN GLOBAL GIT

#### git config --list -> Ver tu configuración global

#### git config --global user.name "Tu nombre" -> Configurar tu nombre

#### git config --global user.email "tuemail@tudominio.com" -> Configurar tu correo

## COMANDOS GENERALES 

#### git init -> Crear git en local

#### git status -> Estado de los archivos

#### git add . -> Alistar archivos

#### git reset ~ruta/nombre~ -> Remover el archivo

#### git commit -m "~mensaje~" -> Subir archivos alistados

#### git log --oneline -> mostrar versiones

#### git checkout -- . -> Volver al ultimo commit

#### git branch -> mirar en que rama estamos

#### git fetch -> Actualizar un repositorio local al estado del remoto

#### git commit -am "~mensaje~" -> Subir archivos directamente

#### .gitkeep -> Agregar para carpetas vacias

#### git config --global alias.S "status --short" -> Aberviar comandos alias.~Abreviatura~ "~Metodo abreviado~"

#### git commit --amend -m "~mensaje~" -> Corregir texto del commit anterior

#### git reset --soft HEAD~3 -> Retroceder commits

#### git reset --soft ~codigo commit a45ca66~ -> Retroceder al commit seleccionado

#### git reset --mixed ~codigo commit a45ca66~ -> Retroceder al commit, saca todo del stage.

#### git reset --hard ~codigo commit a45ca66~ -> Retroceder al commit, borra todo lo que hay después del seleccionado

#### git reflog -> Muestra todo lo sucedido en orden cronologico

#### git mv ViejoNombre.md NuevoNombre.md -> Renombrar archivos sin perder historial

#### git rm ~ruta/nombre~ -> Remover un archivo, debe completarse con un commit

#### .gitignore -> Usado para agregar archivos a los que no se les da seguimiento

## RAMAS

#### git branch nuevo-nombre -> Crear una rama nueva

#### git checkout nuevo-nombre -> Pasarnos a trabajar a esa rama

#### git branch -> Mirar donde estamos trabajando

#### git merge nuevo-nombre -> Debe hacerse desde master, para traer los cambios echos en la otra rama

#### git branch -d nuevo-nombre -> Eliminar una rama

#### git branch -d nuevo-nombre -f -> Eliminar forzado, asi hayan cambios pendientes

#### git checkout -b nuevonombre2 -> Crear una rama y pasarte en un paso

#### git tag ~nombre~ -> Dejar etiquetas, como versión o notas importantes

#### git tag -> Ver los tag que tengo

#### git tag -d ~nombre~ -> Borrar un tag

#### git tag -a ~nombre~ -m "~nota~" -> Para anotar versiones

#### git show ~nombre~ -> Ver más información del tag

#### git stash -> Guardar cambios en stash

#### git stash list -> Ver lista de stash

#### git stash pop -> Trae el ultimo stash

#### git stash clear -> Borrar todos los stash

## GITHUB REMOTE

#### git push -> subir cambios a GitHub

#### git pull -> Bajar los cambios de GitHub

#### git clone ~ruta~ -> Clonar un repositorio

#### git config --global pull.rebase true -> Solución conflictos rebase

#### git rebase --continue -> Terminar rebase satisfactorio "~Antes hacer git commit~"

### [Esc] wq! -> Salir de edición de consola
