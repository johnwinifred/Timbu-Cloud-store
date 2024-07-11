import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
      <>
        <section className='flex flex-col justify-between px-8 py-4 bg-[#E6F2E6] '>
          <Navbar productsInCart={productsInCart} setCartVisible={setCartVisible} />
          <div className="">
          <div className="">{children}</div>
          </div>
          <Footer />
        </section>
      </>
    )
  };
  
  export default Layout;