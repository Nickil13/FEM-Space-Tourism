import { Home } from "./views";
import logo from "./assets/shared/logo.svg";
import { ReactComponent as MenuIcon } from "./assets/shared/icon-hamburger.svg";

function App() {
    return (
        <div>
            <nav className="absolute flex justify-between w-full p-6 h-nav">
                <img src={logo} alt="logo" />
                <button>
                    <MenuIcon />
                </button>
            </nav>
            <main>
                <Home />
            </main>
        </div>
    );
}

export default App;
