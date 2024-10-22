import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./footer.jsx";

const Layout = ({search, setSearch}) => {
    return (
        <div className="App">
            <Header title={"Mon premier blog React JS"}/>
            <Nav search={search} setSearch={setSearch}/>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;