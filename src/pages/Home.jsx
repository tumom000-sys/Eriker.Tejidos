import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "./Home.css"

function Home() {

  const productos = [
    {
      nombre: "Gorro Artesanal",
      precio: "$35.000"
    },
    {
      nombre: "Bufanda de Lana",
      precio: "$40.000"
    },
    {
      nombre: "Guantes Tejidos",
      precio: "$28.000"
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <section className="productos">

        <h2>Nuestros Productos</h2>

        <div className="cards">

          {productos.map((producto,index)=>(
            <ProductCard
            key={index}
            nombre={producto.nombre}
            precio={producto.precio}
            />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;