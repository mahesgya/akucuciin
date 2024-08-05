import React from "react";
import "../style/detail.css";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

function LaundryGeulis() {
  return (
    <div className="detailDiv">
      <div className="navDetail">
        <Link to="/babakanlebak" className="linkNavDet">
          <img src="Images/TombolBack.png" alt="" className="ArrowDetail" />
          <p className="linkNavDetP">Back</p>
        </Link>
        <img src="Images/LogoAkucuciin2.png" alt="" className="LogoNavDetail " />
      </div>
      <div className="imageDiv">
        <img src="Images/Laundry Geulis Google.png" alt="" />
        <div className="imageSubdiv">
          <img src="Images/Laundry Geulis Harga.jpg" alt="" />
          <img src="Images/Laundry Geulis.jpg" alt="" />
        </div>
      </div>
      <div className="completeDiv">
        <div>
          <h1 className="h1Judul">Laundry Geulis</h1>
          <div className="divIcon">
            <img src="Images/Clothes.svg" alt="" />
            <img src="Images/Blanket.png" alt="" />
            <img src="Images/Boneka.png" alt="" />
          </div>
          <div className="divDesc">
            <h3>Laundry Description</h3>
            <p>
              • Gratis Antar Jemput Min 10 Kg <br />• Laundry 5 Kg Gratis 1 Kg
            </p>
          </div>
          <div className="divDesc">
            <h3>Location</h3>
            <p>Jl. Cilubang, RT.03/RW.05, Balungbangjaya, Kec. Bogor Barat, Kota Bogor, Jawa Barat 16116</p>
          </div>
          <div className="mapsLaundry">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.706073780055!2d106.73577437475352!3d-6.558738793434398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4bb29983a73%3A0x3208d1a559979090!2sLAUNDRY%20GEULIS!5e0!3m2!1sid!2sid!4v1721542068027!5m2!1sid!2sid"></iframe>
          </div>
        </div>
        <div className="divPrice">
          <h1>Price List</h1>
          <h4>Paket Kiloan</h4>
          <p>
            <span className="leftPrice"> Reguler (2-4 Hari)</span> <span className="rightPrice"> Rp6.000,00 </span> <br /> <br />
            <span className="leftPrice"> Express (1-2 Hari)</span> <span className="rightPrice"> Rp9.000,00 </span> <br /> <br />
            <span className="leftPrice"> Kilat (4 Jam)</span> <span className="rightPrice"> Rp13.000,00 </span> <br /> <br />
            <span className="leftPrice"> Hanya Setrika</span> <span className="rightPrice"> Rp5.000,00 </span> <br /> <br />
            <span className="leftPrice"> Cuci Kering Tanpa Setrika</span> <span className="rightPrice"> Rp5.000,00 </span> <br /> <br />
          </p>
          <h4> Paket Lainnya</h4>
          <p>
            <span className="leftPrice"> Sprei</span> <span className="rightPrice"> Rp8.000,00 </span> <br /> <br />
            <span className="leftPrice"> Bed Cover Besar</span> <span className="rightPrice"> Rp20.000,00 </span> <br /> <br />
            <span className="leftPrice"> Bed Cover Kecil</span> <span className="rightPrice"> Rp20.000,00 </span> <br /> <br />
            <span className="leftPrice"> Selimut</span> <span className="rightPrice"> Rp7.000,00 </span> <br /> <br />
            <span className="leftPrice"> Boneka Besar</span> <span className="rightPrice"> Rp12.000,00 </span> <br /> <br />
            <span className="leftPrice"> Boneka Kecil (Min 1 Kg )</span> <span className="rightPrice"> Rp8 .000,00 </span> <br /> <br />
          </p>
        </div>
        <div className="mapsLaundryHP">
          <iframe
            className="mapsLaundryHP2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.706073780055!2d106.73577437475352!3d-6.558738793434398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4bb29983a73%3A0x3208d1a559979090!2sLAUNDRY%20GEULIS!5e0!3m2!1sid!2sid!4v1721542068027!5m2!1sid!2sid"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LaundryGeulis;
