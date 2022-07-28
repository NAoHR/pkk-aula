import "../styles/components/footer.css"
export default function Footer(){
    return (
        <>
        <footer>
            <div className="footer-decoration flex">
                <div className="fd-decor">

                </div>
                <div className="fd-decor">

                </div>
                <div className="fd-decor">

                </div>
            </div>
            <div className="footer-content">
                <div className="fc-text flex">
                    <div className="fct-content">
                        <h2 className="fcs-title poppins c-light">Social</h2>
                        <p className="fcs-text poppins c-light">
                        Twitter
                        </p>
                        <p className="fcs-text poppins c-light">
                        Instagram
                        </p>
                        <p className="fcs-text poppins c-light">
                        Facebook
                        </p>
                        <p className="fcs-text poppins c-light">
                        Youtube
                        </p>
                    </div>
                    <div className="fct-content">
                        <h2 className="fcs-title poppins c-light">Laman</h2>
                        <p className="fcs-text poppins c-light">
                        Home
                        </p>
                        <p className="fcs-text poppins c-light">
                        Explore
                        </p>
                        <p className="fcs-text poppins c-light">
                        Order
                        </p>
                    </div>
                    <div className="fct-content">
                        <h2 className="fcs-title poppins c-light">Alamat</h2>
                        <p className="fcs-text poppins c-light">
                        Jl. Balai Pustaka Baru I No.2, RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220
                        </p>
                    </div>
                </div>
            </div>
            <div className="decoration-f"></div>
        </footer>
        </>
    )
}