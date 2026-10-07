# 🚛 Auxilio Los Mogni

Sitio web institucional para un servicio de **auxilio mecánico y traslados** de Hernández, Entre Ríos. Diseñado como una *landing page* de una sola página, rápida, responsive y pensada para convertir visitas en contactos directos por WhatsApp o llamada.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Sin dependencias](https://img.shields.io/badge/dependencias-0-success)

## 📋 Sobre el proyecto

El cliente necesitaba una presencia online simple y efectiva: mostrar la flota, explicar los servicios y facilitar el contacto inmediato desde el celular, que es desde donde llega la mayoría de las consultas en este rubro.

La solución es un sitio estático, sin frameworks ni build, que carga rápido incluso con conexiones móviles lentas.

## ✨ Características

- **Diseño responsive** mobile-first, con menú hamburguesa en pantallas chicas.
- **Botón flotante de WhatsApp** siempre visible y botón de llamada directa (`tel:`).
- **Carrusel automático** en la portada con las unidades de la flota.
- **Galería con lightbox**: las fotos de la flota y de trabajos realizados se amplían al hacer clic.
- **Animaciones al hacer scroll** con `IntersectionObserver` (sin librerías).
- **Barra de navegación fija** con efecto *blur* (`backdrop-filter`).
- **Identidad visual propia**: paleta roja y turquesa vintage con tipografías *Archivo Black* y *Montserrat*.
- **Año del footer dinámico**.

## 🧱 Secciones

| Sección | Descripción |
| --- | --- |
| **Inicio** | Portada con propuesta de valor, botones de contacto y carrusel. |
| **Nuestra flota** | Fichas de cada unidad (Tata 608 con camilla, Fiat Fiorino). |
| **Logística integral** | Servicios principales y adicionales. |
| **Otros trabajos** | Galería de trabajos realizados con lightbox. |

## 🛠️ Tecnologías

- **HTML5** semántico
- **CSS3**: variables CSS, Flexbox, Grid, transiciones y media queries
- **JavaScript** vanilla (ES6+)
- **Google Fonts**

Sin frameworks, sin dependencias y sin proceso de compilación.

## 📁 Estructura

```
.
├── index.html
├── style.css
├── script.js
├── images/
│   ├── logomogni.png
│   ├── tata.jpeg
│   ├── fiorino2.jpg
│   ├── fotocarga.jpeg / fotocarga2.webp
│   └── trabajo1…7
└── README.md
```

```

## 🌐 Despliegue en GitHub Pages

1. Entrá a **Settings → Pages** del repositorio.
2. En *Source* elegí **Deploy from a branch**.
3. Seleccioná la rama `main` y la carpeta `/ (root)`.
4. Guardá. En un par de minutos el sitio queda publicado.

## ℹ️ Sobre esta versión de demostración

Este repositorio es una **versión de portfolio** de un sitio real desarrollado para un cliente.

- Los **datos de contacto fueron reemplazados por datos de ejemplo** (el teléfono y el enlace de WhatsApp no son reales).
- Se quitaron del código las referencias al dominio original, para que la demo no compita ni se confunda con el sitio del cliente.
- Las marcas, el logotipo y las fotografías pertenecen a sus titulares y se muestran únicamente con fines de portfolio.

## 👤 Autor

**Tomás Occhiuto**
Diseño y desarrollo web

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tomas-occhiuto/)

---

<sub>El código es de mi autoría. Los contenidos de marca (nombre comercial, logo e imágenes) son propiedad del cliente.</sub>
