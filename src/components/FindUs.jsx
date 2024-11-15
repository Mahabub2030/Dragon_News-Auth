import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Find Us</h2>
      <div className="join flex join-vertical *:bg-white text-black">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram></FaInstagram>Instagram
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter/> Twitter
        </button>
      </div>

    </div>
  );
};

export default FindUs;