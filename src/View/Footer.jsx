export function Footer() {
  // const { filters } = useFilters()

  return (
    <footer className="bg-light text-dark py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <p>Dirección: 123 Fashion St, Ciudad de la Moda</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@fashionnova.com</p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold">Acerca de nosotros</h4>
            <p>
              Tu tienda de ropa para estar siempre a la moda. Descubre las
              últimas tendencias y estilos en nuestra colección. Exprésate a
              través de la moda en FashionCode.
            </p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold">
              Síguenos en las redes sociales
            </h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FashionCode. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
