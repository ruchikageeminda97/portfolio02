export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">I'm Ruchika</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Mobile</span>{" "}
            
           <span className="devop-span">Developer</span> 
          </h1>
          <p className="hero--section-description">
            Hello, I'm Ruchika, a mobile developer & Web developer skilled in React Native and React JS. I craft user-centric cross-platform apps with elegance and efficiency.
            <br />  My portfolio showcases my work, so let's collaborate to make your app ideas a reality!
          </p>
        </div>

        {/* icon */}
        <div className="toper--icon">
          <div>
            <a
              href="https://github.com/ruchikageeminda97"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            >

              <img src="./img/git.png" className="icon" />

            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/ruchikarg97/"
              className="navbar--content"
              target="_blank"
              rel="noreferrer"
            >

              <img src="./img/linkedin.png" className="icon" />

            </a>
          </div>

        </div>


      </div>
      <div className="hero--section--img">
        <img src="./img/image.png" alt="Hero Section" />
      </div>
    </section>
  );
}
