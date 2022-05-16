# Creacion del API Rest con Hasura y Heroku
Aquí se mencionarán los pasos y recursos empleados para la creación del API Rest.
Se optó por usar Heroku y Hasura para crear una API que se conecte a una base de datos que alamcene la información que consumirá la página. 
### 1. Crear una cuenta en Heroku y Hasura
El primer paso es crear cuentas en Hasura cloud y Heroku, Hasura nos permitirá crear la API y administrarla, mientras que Heroku proporcionará la base para almacenar la información. 

Registro en Heroku y Hasura
![Registrarse en Heroku](/Creacion_del_API/images/Heroku_r.png)

![Registrarse en Hasura](/Creacion_del_API/images/Hasura_r.png)

Una vez que ya tengamos las cuentas listas, lo siguiente crear la base de datos en Hasura.

### 2. Creación de la base de datos.

Una vez creadas las cuentas lo siguiente es relacionar la cuenta de Hasura con Heroku para comenzar a usar la base de datos. 
![Relacionar cuentas](/Creacion_del_API/images/Data1.png)

Aquí nos debe de aparcer la opción de relacionar las cuentas, en mi caso no me parece porque ya lo hice.

![Relacionar cuentas](/Creacion_del_API/images/Data2.png)

Una vez relacionadas las cuentas lo siguiente es crear una nueva tabla en la opción New Table

Después debemos de añadir las columnas que se mostrarán, para posteriormente crear la tabla.

Aqí hago un paréntesis y se mencionará el modelado de datos necesario para definir las columnas. El proyecto muestra un mapa interactivo con información de una especie en peligro, entonces se necesita definir que tipo de información se presentará. El modelado de datos, en un formato de Obejto (JSON), es el siguiente:

{
    "id": "Es un índice para llevar un control"<>,
    "nombrecm": "Nombre común de la espceie",
    "nombresc": "Nombre científico de la misma",
    "distribucion": "Lugar donde habita la especie",
    "categoria": "Nivel de amaneza de la especie",
    "endemico": "Indica si la especie es endémica o no",
    "img": "Url de donde se tomará la imagen representativa a mostrar",
    "infog": "Información general de la especie"
}

La información del nivel de amenaza, y otros datos, se tomó de la [NOM-059-SEMARNAT-2010](https://dof.gob.mx/nota_detalle_popup.php?codigo=5173091), la cual identifica las especies o poblaciones de flora y fauna silvestres en riesgo en nuestro país. 

El modelado de datos nos sirvió para saber que tipo de información contendría la API, esta se introdujo en las columnas de la tabla anteriormente creada. 

Lo siguiente es subir lo datos para las especies que se mostrarán, en total se modelaron 15 especies en peligro. Para ello la tabla creada nos permite insertar esta información. 
![Subir datos](/Creacion_del_API/images/Data5.png)

Una vez subida toda la informacion, regresamos al panel principal y veremos que la información ya está en un formato JSON, tal como lo queremos. 
![Subir datos](/Creacion_del_API/images/Data6.png)

Ya casi tenemos listo la API, lo unico que nos falta es preionar en REST y elegir un nombre, el tipo de acción que haremos en la API y un link para manejarlo. 
![Subir datos](/Creacion_del_API/images/Data8.png)

Nos arrojará algo como esto, en donde tendremos el link para manejar el API
![Subir datos](/Creacion_del_API/images/Data7.png)

Podemos comprobar que podemos acceder a la API simplemente entrando al enlace que nos da, o utilizar alguna herramienta online que haga el test, usaremos ambas. En nuestro caso el enlace del API que creamos, con los datos que modelamos y utilizamos es: [API_Ajolonaúticos](https://flowing-blowfish-70.hasura.app/api/rest/especies)

![Datos API](/Creacion_del_API/images/Data9.png)

Utilizando una herramienta nos arroja lo siguiente:
![Datos API](/Creacion_del_API/images/Data10.png)

Listo!!! Ya tenemos la API para consumirla. 

Para más información consultar la [documentación de Hasura](https://hasura.io/docs/latest/graphql/core/index/)




