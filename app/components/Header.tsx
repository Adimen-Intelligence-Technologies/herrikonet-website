import Image from "next/image";
import LiquidEther from "./LiquidEther";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <section
      className="header-section"
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
        autoIntensity={3}
        mouseForce={8}
        cursorSize={100}
        viscous={80}
        iterationsPoisson={51}
        resolution={0.4}
      />

      <nav className="header-nav" style={{ position: "relative", zIndex: 1 }}>
        <a
          href="/"
          style={{
            display: "block",
            width: "clamp(120px, 12vw, 180px)",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Image
            src="/logo-herrikonekt.svg"
            alt="herrikonekt"
            width={377}
            height={74}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </a>

        {/*
        <ul className="header-nav-links text-2xl">
          <li><NavLink href="#para-quien">¿Para quién?</NavLink></li>
          <li><NavLink href="#como-funciona">¿Cómo funciona?</NavLink></li>
          <li><NavLink href="#eres-herri">¿Eres Herri?</NavLink></li>
          <li><NavLink href="#esponsoriza">Esponsoriza la causa</NavLink></li>
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
          Harremetan jarri
        </button>
        */}
      </nav>

      <div className="header-hero" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <span className="header-eyebrow">Coming soon</span>
          <h1>Herriko merkataritzaren iraultza, zure poltsikoan</h1>
          <p>
           Digitalizazioa eta herriko kontsumoa bultzatzen dituen aplikazio bat, pertsonak inguruko saltokiekin konektatuz eta komunitatearen ekonomia indartuz.
          </p>
          <div className="header-ctas">
            <img
              src="/app-store-download.svg"
              alt="App Store-etik deskargatu"
              style={{ height: "52px", width: "auto", display: "block" }}
            />
            <img
              src="/google-play download.svg"
              alt="Google Play-tik deskargatu"
              style={{ height: "52px", width: "auto", display: "block" }}
            />
          </div>
        </div>

        <div className="header-visual">
          <div className="header-phones">
            <Image
              src="/images/phone-3.png"
              alt=""
              width={697}
              height={821}
              className="header-phone header-phone-back"
            />
            <Image
              src="/images/phone-1.png"
              alt="herrikonekt app"
              width={697}
              height={821}
              className="header-phone header-phone-front"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
