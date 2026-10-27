# Zelda OOT Guide

Guía interactiva de *The Legend of Zelda: Ocarina of Time*, desarrollada con React Native y Expo.

Zelda OOT Guide es una aplicación móvil diseñada para ayudar a los jugadores a completar su aventura en Hyrule, consultar ubicaciones, seguir misiones y llevar un registro de sus coleccionables y progreso.

## Características

- **Guía de misiones:** consulta rutas y pasos para avanzar en la aventura.
- **Skulltulas doradas:** explora ubicaciones por región y registra cuáles has encontrado.
- **Piezas de corazón:** lleva el seguimiento de los coleccionables relacionados con la salud.
- **Objetos e inventario:** consulta información y referencias visuales de los objetos del juego.
- **Contenido adicional:** accede a guías y contenido complementario.
- **Tabla de recompensas:** consulta las recompensas relacionadas con las Skulltulas doradas.
- **Seguimiento del progreso:** marca los pasos completados de cada guía.
- **Persistencia local:** guarda el progreso mediante AsyncStorage.
- **Interfaz temática:** diseño oscuro inspirado en Ocarina of Time, con detalles dorados, verdes y violetas.

## Tecnologías

- React Native
- Expo
- JavaScript
- React Hooks
- React Native FlatList y Modal
- AsyncStorage
- Android SDK y Gradle para compilaciones locales

## Requisitos

Antes de ejecutar el proyecto, instala:

- Node.js
- npm
- Git
- Android Studio y Android SDK, si deseas generar un APK localmente.

Consulta `package.json` para conocer las versiones de las dependencias utilizadas.

## Instalación

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd ZeldaootGuide
```

Sustituye `<URL_DEL_REPOSITORIO>` por la URL real del repositorio de GitHub.

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Iniciar la aplicación

```bash
npx expo start
```

Para reiniciar el servidor y limpiar la caché:

```bash
npx expo start -c
```

La aplicación puede probarse con Expo Go en dispositivos compatibles, siempre que las dependencias utilizadas sean compatibles con este entorno.

## Compilación para Android

El proyecto permite generar un APK mediante Gradle, sin depender de las compilaciones en la nube de EAS.

### 1. Preparar el entorno

Instala Android Studio y configura Android SDK, las herramientas de compilación y un JDK compatible con el proyecto.

### 2. Generar el proyecto nativo

Desde la raíz del proyecto, ejecuta:

```bash
npx expo prebuild --platform android
```

Este comando genera la carpeta `android` si todavía no existe. Si ya tienes modificaciones nativas, revisa los cambios antes de volver a ejecutar `prebuild`.

### 3. Generar un APK de depuración

Entra en la carpeta Android:

```powershell
cd android
```

Ejecuta:

```powershell
.\gradlew.bat assembleDebug
```

El archivo generado normalmente se encuentra en:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

El APK de depuración puede requerir que Metro esté ejecutándose y que el dispositivo pueda conectarse al servidor de desarrollo.

### 4. Generar un APK de lanzamiento

Desde la carpeta `android`, ejecuta:

```powershell
.\gradlew.bat assembleRelease
```

El archivo generado normalmente se encuentra en:

```text
android/app/build/outputs/apk/release/app-release.apk
```

La compilación de lanzamiento incluye el bundle JavaScript de la aplicación. Antes de distribuirla, verifica que la compilación funcione correctamente y configura la firma adecuada para el tipo de distribución previsto.

## Estructura del proyecto

```text
ZeldaootGuide/
├── assets/          # Imágenes y recursos gráficos
├── src/
│   ├── Data/        # Datos y contenido de las guías
│   └── screens/     # Pantallas de la aplicación
├── App.js           # Componente principal
├── app.json         # Configuración de Expo
├── eas.json         # Perfiles de compilación EAS
├── index.js         # Punto de entrada
├── package.json     # Dependencias y scripts
└── README.md        # Documentación del proyecto
```

## Almacenamiento del progreso

La aplicación utiliza AsyncStorage para conservar localmente el progreso de determinadas secciones.

El progreso se almacena según las claves definidas por cada pantalla. La desinstalación de la aplicación o el borrado de sus datos puede provocar la pérdida del progreso guardado localmente.

## Desarrollo

Para contribuir al desarrollo del proyecto:

1. Clona el repositorio.
2. Instala las dependencias.
3. Inicia Expo.
4. Modifica las pantallas dentro de `src/screens/` y los datos correspondientes dentro de `src/Data/`.
5. Prueba los cambios antes de generar una nueva compilación.

## Estado del proyecto

Proyecto en desarrollo. Las guías, funciones y contenidos pueden cambiar a medida que se incorporen mejoras.

## Créditos y propiedad intelectual

*The Legend of Zelda: Ocarina of Time*, sus personajes, nombres y elementos asociados pertenecen a sus respectivos titulares de derechos, incluido Nintendo.

Este proyecto es una iniciativa independiente de carácter informativo y de guía para jugadores. No está afiliado, patrocinado ni respaldado oficialmente por Nintendo.

Los recursos gráficos de terceros conservan sus respectivas licencias y derechos de autor.

## Autor

Proyecto independiente desarrollado con React Native y Expo.

---

Explora Hyrule, completa tu aventura y encuentra todas las Skulltulas doradas.
