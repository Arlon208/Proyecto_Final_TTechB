# 📦 E-commerce Entre Sábanas 🛌

Este repositorio aloja el código del proyecto final desarrollado durante el **Bootcamp Talento Tech (Nivel Básico)**.  
**"Entre Sábanas"** es una simulación de una plataforma de comercio electrónico especializada en la venta de textiles para el hogar, como sábanas, protectores de colchón, toallas y mantelería.

El proyecto está diseñado para demostrar la aplicación práctica de **JavaScript (Vanilla)** en el desarrollo frontend, enfocándose en la manipulación dinámica del DOM y la persistencia de datos a nivel del cliente mediante **Web Storage**.

---

## 🚀 Características y Funcionalidades

| Característica           | Descripción                                                                 | Implementación Técnica                                                  |
|--------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Persistencia del Carrito** | Los productos añadidos se guardan y mantienen en el carrito al navegar entre categorías o recargar la página. | `localStorage` |
| **Filtrado Dinámico**    | El catálogo se filtra eficientemente según la categoría seleccionada por el usuario (ej: `productos.html?cat=401`). | Uso de `URLSearchParams` y `Array.prototype.filter()` |
| **Paginación**           | Sistema de paginación que divide el catálogo filtrado en grupos de 20 productos para mejorar la usabilidad. | Cálculos con `Math.ceil` y extracción con `Array.prototype.slice()` |
| **Renderizado Modular**  | Carga dinámica de secciones como menú y pie de página para evitar duplicación de código. | Inyección del DOM mediante `cargarFragmento()` |
| **Simulación de Pago**   | Formulario con validaciones básicas de tarjeta de crédito (formato, longitud, mes/año de expiración) y simulación de procesamiento. | HTML5 `type="month"`, atributos `pattern` y `setTimeout()` |

---

## 🛠️ Tecnologías Utilizadas

| Categoría            | Tecnologías                                      |
|----------------------|--------------------------------------------------|
| **Estructura**       | HTML5                                            |
| **Diseño y Estilos** | CSS3, Bootstrap 5 (Diseño responsivo), Font Awesome |
| **Lógica de Aplicación** | JavaScript (Vanilla)                         |
| **Data Storage**     | `localStorage`                                   |

---

## ⚙️ Configuración y Ejecución

Al ser un proyecto exclusivamente de **frontend**, su ejecución es directa y no requiere backend ni bases de datos complejas.

### 🔁 Clonar el Repositorio

```bash
git clone https://github.com/Arlon208/Proyecto_Final_TTechB.git
