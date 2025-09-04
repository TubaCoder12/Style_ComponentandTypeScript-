import Button from "../Ui/Button";
import img1 from "../../assets/Images/img1.svg";
import img2 from "../../assets/Images/img2.svg";
import img3 from "../../assets/Images/img3.svg";
import img4 from "../../assets/Images/img4.svg";
import sale from "../../assets/Images/sale.svg";
import {
  HeroBottom,
  HeroCenter,
  HeroContainer,
  HeroLeft,
  HeroRight,
} from "./HeroSectionStyle";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroLeft>
          <img src={img1} />
        </HeroLeft>

        <HeroCenter>
          <HeroBottom>
            <img src={img2} alt="Bottom" />
          </HeroBottom>
          <h1>ULTIMATE</h1>
          <img src={sale} alt="" />
          <p>NEW COLLECTION</p>
          <Button>SHOP NOW</Button>

          <HeroBottom>
            <img src={img4} alt="Bottom" />
          </HeroBottom>
        </HeroCenter>

        <HeroRight>
          <img src={img3} alt="Right" />
        </HeroRight>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
