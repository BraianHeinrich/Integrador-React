# 🛒 E-commerce React + Backend

Proyecto e-commerce desarrollado como **integrador final**.  
Incluye **frontend en React** y **backend en Node.js con Express y MongoDB**.

---

## 🔗 Deploy

- **Frontend (Vercel):** https://integrador-react-ii8y.vercel.app/
- **Backend:** (https://backend-final-orcin.vercel.app/)

---

## ✨ Funcionalidades

- Listado dinámico de productos desde el backend
- Filtros por categoría
- Carrito de compras
- Agregar y eliminar productos del carrito
- Persistencia del carrito en `localStorage`
- Confirmación antes de vaciar el carrito
- Diseño responsive

---

## 🧠 Tecnologías utilizadas

### Frontend
- React
- Context API
- Fetch API
- CSS / Tailwind
- Vercel

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- cors

---

## 📁 Estructura del proyecto

/frontend
├── src
│ ├── components
│ ├── pages
│ ├── context
│ ├── styles
│ ├── config
│ └── data
└── public

/backend
├── src
│ ├── models
│ ├── controllers
│ ├── routes
│ ├── app.js
│ └── server.js
└── .env


---

## 🚀 Instalación y uso local

### Backend

```bash
cd backend
npm install
npm run dev

Crear archivo .env:

MONGO_URI=tu_uri_de_mongodb
PORT=3000

Frontend
cd frontend
npm install
npm run dev

| Método | Ruta              | Descripción                 |
| ------ | ----------------- | --------------------------- |
| GET    | /api/products     | Obtener todos los productos |
| GET    | /api/products/:id | Obtener producto por ID     |
| POST   | /api/products     | Crear producto              |
| PUT    | /api/products/:id | Actualizar producto         |
| DELETE | /api/products/:id | Eliminar producto           |


📌 Notas

El frontend consume los productos desde el backend usando fetch.

El carrito se maneja con Context API.

Los productos se almacenan en MongoDB.

El proyecto cumple con los requisitos del integrador final.

👨‍💻 Autor

Braian Heinrich

-------

