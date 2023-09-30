export function Footer () {
  // const { filters } = useFilters()

  return (
    <footer className="bg-success text-light py-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold">Contacto</h4>
          <p>Dirección: 123 Fashion St, Ciudad de la Moda</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@fashionnova.com</p>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold">Enlaces rápidos</h4>
          <ul className="list-disc ml-4">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/productos">Productos</a>
            </li>
            <li>
              <a href="/ofertas">Ofertas</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-lg font-semibold">Síguenos en las redes sociales</h4>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-pinterest text-xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} FashionNova. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
  
  )
}
