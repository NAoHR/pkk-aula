import "../styles/main.css";
import ReactImageGallery from "react-image-gallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-image-gallery/styles/css/image-gallery.css"

const images = [
    {
      original: 'https://bpsdm.kaltimprov.go.id/apps/reservasi/storage/files/galeri/pfyQgCUtnbB2lzy4jtPJwwGzCMtgN326JLb58uLQ.jpeg',
      thumbnail: 'https://bpsdm.kaltimprov.go.id/apps/reservasi/storage/files/galeri/pfyQgCUtnbB2lzy4jtPJwwGzCMtgN326JLb58uLQ.jpeg',
    },
    {
      original: 'https://www.its.ac.id/informatika/wp-content/uploads/sites/44/2020/04/WhatsApp-Image-2020-04-08-at-09.25.41-1-1024x768.jpeg',
      thumbnail: 'https://www.its.ac.id/informatika/wp-content/uploads/sites/44/2020/04/WhatsApp-Image-2020-04-08-at-09.25.41-1-1024x768.jpeg',
    },
    {
      original: 'https://www.its.ac.id/mt/wp-content/uploads/sites/48/2018/03/P8080481-1024x576.jpg',
      thumbnail: 'https://www.its.ac.id/mt/wp-content/uploads/sites/48/2018/03/P8080481-1024x576.jpg',
    }
  ];

export default function Main(){
    return (
        <>
            <Navbar />
            <div className="opening flex center-vh">
                <div className="o-text-side zindex">
                    <h1 className="bebas big-title c-black">
                        Cari <span className="c-lgreen"><b> aula </b></span> Sesuai Keinginan
                    </h1>
                    <p className="poppins para-o c-black">
                        Kami menyediakan <span className="c-lgreen"><b> aula </b></span>dengan fasilitas dengan kualitas yang terbaik, dengan harga terjangkau dan dapat diandalkan
                    </p>
                    <span className="btn-explore b-lgreen bebas c-light box-shadow">
                        Explore
                    </span>
                </div>
                <div className="o-image-side zindex">
                    <img src="/aula-main.png" alt="" className="o-image-side"/>
                </div>
                <div className="decoration">
                    <div className="sub-decoration"></div>
                    <div className="sub-decoration"></div>
                    <div className="sub-decoration"></div>
                </div>
            </div>
            <div className="gallery">
                <h2 className="gallery-text poppins c-black">
                    Preview Sekilas <br /><span className="c-lgreen">Gallery</span>
                </h2>
                <ReactImageGallery items={images}/>
            </div>
            <div className="we-off">
                <h2 className="gallery-text poppins c-black weo-main">
                    Apa yang Kami <br /><span className="c-lgreen">Tawarkan</span>
                </h2>
                <div className="explanation">
                    <div className="woe-image">
                        <img src="/undraw_engineering_team_re_fvat.svg" alt="" />
                    </div>
                    <div className="woe-text right">
                        <h2 className="woe-title poppins c-black">
                            Lorem Ipsum
                        </h2>
                        <p className="woe-para poppins c-black">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corrupti doloremque nisi ad, architecto eligendi alias numquam laboriosam debitis harum nam voluptates, unde repellendus explicabo animi quae ducimus exercitationem quasi.
                        </p>
                    </div>
                </div>
                <div className="explanation reverse">
                    <div className="woe-image">
                        <img src="/undraw_engineering_team_re_fvat.svg" alt="" />
                    </div>
                    <div className="woe-text left">
                        <h2 className="woe-title poppins c-black">
                            Lorem Ipsum
                        </h2>
                        <p className="woe-para poppins c-black">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corrupti doloremque nisi ad, architecto eligendi alias numquam laboriosam debitis harum nam voluptates, unde repellendus explicabo animi quae ducimus exercitationem quasi.
                        </p>
                    </div>
                </div>
                <div className="explanation">
                    <div className="woe-image">
                        <img src="/undraw_engineering_team_re_fvat.svg" alt="" />
                    </div>
                    <div className="woe-text right">
                        <h2 className="woe-title poppins c-black">
                            Lorem Ipsum
                        </h2>
                        <p className="woe-para poppins c-black">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus corrupti doloremque nisi ad, architecto eligendi alias numquam laboriosam debitis harum nam voluptates, unde repellendus explicabo animi quae ducimus exercitationem quasi.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}