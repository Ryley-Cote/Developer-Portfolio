import { Outlet } from "react-dom"
import {Navbar} from "./Navbar.jsx";

export const Layout = () => {
    return (
        <div className= "app">
            <Navbar/>
            <main className="container">
                <Outlet />
            </main>
            <footer className="footer">
                <span>@ {new Date().getFullYear()} Ryley Cote</span>
            </footer>
        </div>
    )
}