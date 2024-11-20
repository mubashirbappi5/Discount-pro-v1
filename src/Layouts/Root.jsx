import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { AuthnContext } from './../Provider/AuthContext';
import Loading from "../Pages/Loading";


const Root = () => {
    const {loading} = useContext(AuthnContext)
    if(loading){
        return <Loading/>
    }
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