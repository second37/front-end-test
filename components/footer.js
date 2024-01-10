import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer py-4" style={{ fontFamily: 'Inter', backgroundColor: "#1f3a8b" }}>
      <div className="container text-white">
        <div className="row">
          <div className="col-2">
            <h1>Logo</h1>
          </div>
          <div className="col">
            <h3>Amethyst Solutions Co.,Ltd.</h3>
            <p>252/93(N) 17th FL., Muang Thai-Phatra Complex Tower B, Rachadaphisek Road, Huaykwnag, Bangkok 10310</p>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn text-white"><FiFacebook /></button>
              <button type="button" className="btn text-white"><FaInstagram /></button>
              <button type="button" className="btn text-white"><AiOutlineYoutube /></button>
              <button type="button" className="btn text-white"><FiTwitter /></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;