import Header from "../../components/header/Header";
import MainContainer from "../../components/mainContainer/MainContainer";
import BannerSection from "../../components/bannerSection/BannerSection";
import AboutMeSection from "../../components/aboutMeSection/AboutMeSection";
import TechSection from "../../components/techSection/TechSection";
import ProjectsSection from "../../components/projectsSection/ProjectsSection";
import Footer from "../../components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainContainer>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </MainContainer>

      <Footer />
    </>
  );
}
