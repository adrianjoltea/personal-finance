
import { FaChartLine, FaGlobeEurope, FaIdCard, FaTable } from "react-icons/fa";

function LandingPageFeatures() {
  return (
    <div className="landing-page-features" id="features">
      <div className="landing-page-features-text">
        <h2>Features</h2>
        <span className="landing-page-divider"></span>
        <div className="landing-page-features-container">
          <div className="landing-page-features-container-children">
            <FaIdCard className="landing-page-features-container-children-icon" />
            <h4>Creating Cards</h4>
            <span>Personalize cards for any occasion with ease.</span>
          </div>
          <div className="landing-page-features-container-children">
            <FaChartLine className="landing-page-features-container-children-icon" />
            <h4>Investing</h4>
            <span>Track investments and optimize your strategy.</span>
          </div>
          <div className="landing-page-features-container-children">
            <FaTable className="landing-page-features-container-children-icon" />
            <h4>Transactions</h4>
            <span>Manage and analyze all financial transactions.</span>
          </div>
          <div className="landing-page-features-container-children">
            <FaGlobeEurope className="landing-page-features-container-children-icon" />
            <h4>Languages</h4>
            <span>Explore our platform in multiple languages.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageFeatures;
