import React from "react";
import { NavBar } from "./Header";

const Blog = () => {
  const blogPosts = [
    {
      title: "Tendencias de moda para la temporada de otoño",
      date: "22 de Octubre, 2023",
      content:
        "Descubre las últimas tendencias de moda para la temporada de otoño. Desde abrigos elegantes hasta botas de moda, te mantendremos actualizado con los estilos más recientes.",
    },
    {
      title: "Cómo elegir el atuendo perfecto para una cita",
      date: "15 de Octubre, 2023",
      content:
        "Consejos y trucos para seleccionar el atuendo ideal para una cita romántica. Te ayudaremos a lucir impresionante y sentirte seguro en tu encuentro especial.",
    },
  ];

  const h1Style = {
    textAlign: "center",
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <h2 style={h1Style}>Blog de Moda</h2>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                  <p className="card-text">{post.content}</p>
                  <a href="#" className="card-link">
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
