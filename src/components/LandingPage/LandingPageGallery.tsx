import img1 from "../../../public/gallery/imgGallery1.png";
import img2 from "../../../public/gallery/imgGallery2.png";
import img3 from "../../../public/gallery/imgGallery3.png";
import img4 from "../../../public/gallery/imgGallery4.png";
import img5 from "../../../public/gallery/imgGallery5.png";
import img7 from "../../../public/gallery/imgGallery7.png";
import img8 from "../../../public/gallery/imgGallery8.png";
import img9 from "../../../public/gallery/imgGallery9.png";

function LandingPageGallery() {
  return (
    <div className="landing-page-gallery-title">
      <h2>Image Gallery</h2>
      <span className="landing-page-divider"></span>
      <div className="landing-page-gallery">
        <div className="big">
          <img src={img1} alt="gallery" className="img-1" />
        </div>
        <div className="wide">
          <img src={img3} alt="gallery" className="img-3" />
        </div>

        <div className="big">
          <img src={img4} alt="gallery" className="img-4" />
        </div>
        <div className="tall">
          <img src={img9} alt="gallery" className="img-9" />
        </div>
        <div className="wide">
          <img src={img5} alt="gallery" className="img-5" />
        </div>
        <div className="tall">
          <img src={img8} alt="gallery" className="img-8" />
        </div>
        <div className="wide">
          <img src={img7} alt="gallery" className="img-7" />
        </div>
        <div className="wide">
          <img src={img2} alt="gallery" className="img-2" />
        </div>
      </div>
    </div>
  );
}

export default LandingPageGallery;
