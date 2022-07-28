import "../styles/components/navbar.css";

export default function Navbar(){
    return (
        <>
            <nav className="nav-main m0-auto">
                <div className="nav-content m0-auto flex">
                    <div className="nav-perk flex center-vh">
                        <h3 className="poppins c-lgreen">
                            Aulas
                        </h3>
                    </div>
                    <div className="nav-perk flex center-vh">
                        <a href="aula">
                            <span className="npr-content poppins c-light b-lgreen box-shadow">
                                Order
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}