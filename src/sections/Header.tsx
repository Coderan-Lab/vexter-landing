import ArrowRight from "@/assets/icons/arrow-right.svg";
import VexterLogo from "@/assets/logos/vexter-logo.svg";
import MenuIcon from "@/assets/icons/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <a
        href="https://wa.me/573124577909?text=Hola%2C%20quiero%20solicitar%20un%20demo%20de%20Vexter"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 hover:bg-black/80 transition-colors"
      >
        <p className="text-white/60 hidden md:block">Respuesta automatizada a alertas de seguridad con IA</p>
        <div className="inline-flex gap-1 items-center">
          <p>Solicita un demo gratuito</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </a>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <VexterLogo className="h-10 w-auto" />
            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">Producto</a>
              <a href="#">Características</a>
              <a href="#">Clientes</a>
              <a href="#">Precios</a>
              <a href="#">Ayuda</a>
              <a
                href="https://wa.me/573124577909?text=Hola%2C%20quiero%20solicitar%20un%20demo%20de%20Vexter"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/80 transition-colors"
              >
                Solicitar demo
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
