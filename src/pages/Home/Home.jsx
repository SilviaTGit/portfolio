import ContactMe from "../../assets/components/ContactMe";
import Footer from "../../assets/components/Footer";
import HeroSection from "../../assets/components/HeroSection";
import MyPortfolio from "../../assets/components/MyPortfolio";
import MySkills from "../../assets/components/MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
