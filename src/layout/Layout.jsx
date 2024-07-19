import Navbar from "../components/layout/Navbar";
import SidebarMenu from "../components/layout/SidebarMenu";

function Layout({children}) {
    return (
        <div className="container-fluid h-100">
            <Navbar></Navbar>            
            <div className="row h-100">
                <SidebarMenu></SidebarMenu>
                <div className="col-6 col-md-11 col-lg-10">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;