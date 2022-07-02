import { Home } from "./views";
import logo from "./assets/shared/logo.svg";
import { ReactComponent as MenuIcon } from "./assets/shared/icon-hamburger.svg";

function App() {
    return (
        <div className="relative ">
            <nav className="absolute inset-0 flex justify-between w-full p-6 h-nav 2xl:top-10 2xl:pl-14">
                <img className="2xl:w-12 2xl:h-12" src={logo} alt="logo" />
                <button>
                    <MenuIcon />
                </button>
            </nav>
            {/* <main className="min-h-nav-screen"> */}
            <main className="min-h-nav-screen">
                <Home />
            </main>
        </div>
    );
}

export default App;
