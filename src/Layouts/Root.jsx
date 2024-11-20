import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";



const Root = () => {
    
    return (
        <div>
            <header>
                <Navber/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
            
        </div>
    );
};

export default Root;