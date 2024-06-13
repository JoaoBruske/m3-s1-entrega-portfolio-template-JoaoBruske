import banner from "../../assets/banner-img.png";

export default function BannerSection() {
  return (
    <section className="bannerSection">
      <div className="bannerSection__container">
        <span className="name">JOSEDASILVA</span>
        <h1 className="title1">Bem vindo ao meu portfólio</h1>
        <p className="paragraph">Uma frase interessante sobre mim</p>
        <a className="button">Saiba mais</a>
      </div>
      <img  className="bannerSection__img" src={banner} alt="banner" />
    </section>
  );
}
