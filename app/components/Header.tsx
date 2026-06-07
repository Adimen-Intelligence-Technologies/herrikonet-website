import LiquidEther from "./LiquidEther";
import Logo from "./Logo";

export default function Header() {
  return (
    <section
      style={{
        position: "relative",
        margin: "12px",
        minHeight: "calc(100dvh - 24px)",
        background: "#0a1d09",
        color: "#ffffff",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <LiquidEther
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        colors={["#62b94e", "#a0f981", "#ACFE6B"]}
        autoDemo={true}
        autoSpeed={0.1}
        autoIntensity={1.4}
        mouseForce={5}
        cursorSize={100}
        viscous={30}
        iterationsPoisson={51}
        resolution={0.4}
      />

      <nav className="header-nav" style={{ position: "relative", zIndex: 1 }}>
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(20px, 1.8vw, 24px)",
            letterSpacing: "-0.01em",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          herrikonekt
        </a>

        <ul className="header-nav-links">
          <li><a href="#discover">Discover</a></li>
          <li><a href="#values">Values</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <button
          style={{
        background: "#ffffff",
        color: "#0a1d09",
            border: "none",
            borderRadius: "999px",
            padding: "12px 22px",
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Get in touch
        </button>
      </nav>

      <div className="header-hero" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <h1>Revolución en tu bolsillo</h1>
          <p>
           Una aplicación que impulsa la digitalización y el consumo local, conectando a las personas con los comercios de su entorno y fortaleciendo la economía de la comunidad.
          </p>
          <div className="header-ctas">
            <button
              style={{
                background: "#ffffff",
                color: "#0a1d09",
                border: "none",
                borderRadius: "999px",
                padding: "16px 30px",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Get started
            </button>
            <button
              style={{
                background: "transparent",
            color: "#ffffff",
            border: "1px solid #ffffff",
                borderRadius: "999px",
                padding: "16px 30px",
                fontFamily: "var(--font-sans)",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Learn more
            </button>
          </div>
        </div>

        <div className="header-visual">
          <Logo />
        </div>
      </div>
    </section>
  );
}
