import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "linear-gradient(153deg, #133212 25%, #a0f981 100%)",
        color: "#f2f2ee",
        overflow: "hidden",
        padding: "0 0 6rem 0",
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2.4rem 3.6rem",
          color: "#f2f2ee",
        }}
      >
        <div
          style={{
            fontFamily: '"Berlin Sans FB", sans-serif',
            fontSize: "2.2rem",
            letterSpacing: "0.04em",
          }}
        >
          Herrikonekt
        </div>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.4rem",
            fontSize: "1.4rem",
          }}
        >
          <a href="#whoitsfor">Who it&apos;s for</a>
          <a href="#howitworks">How it works</a>
          <a href="#business">Are you a Biz?</a>
          <a href="#sponsor">Sponsor</a>
          <a
            href="#contact"
            style={{
              background: "rgba(19,50,18,0.4)",
              padding: "1.2rem 2.4rem",
              borderRadius: "0.6rem",
              backdropFilter: "blur(8px)",
            }}
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero content */}
      <section
        style={{
          position: "relative",
          zIndex: 5,
          padding: "10rem 3.6rem 4rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: '"Berlin Sans FB", sans-serif',
            fontSize: "clamp(3.6rem, 9vw, 11rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            maxWidth: "14ch",
            margin: 0,
          }}
        >
          Revolution in your pocket
        </h1>
        <p
          style={{
            marginTop: "2.4rem",
            maxWidth: "60ch",
            fontSize: "1.6rem",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          A values-driven app to discover aligned businesses, support
          underrepresented founders, track your impact, and turn everyday
          spending into measurable change.
        </p>
        <div
          style={{
            marginTop: "3.2rem",
            display: "flex",
            gap: "1.2rem",
            maxWidth: "560px",
          }}
        >
          <a
            href="#"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 6rem 0 2.4rem",
              height: "6rem",
              background: "#0a1d09",
              color: "#f2f2ee",
              borderRadius: "0.6rem",
              fontSize: "1.6rem",
              position: "relative",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Download in the
              </span>
              <span style={{ fontWeight: 500 }}>App Store</span>
            </span>
            <span
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "6rem",
                height: "6rem",
                background: "rgba(0,0,0,0.25)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
              </svg>
            </span>
          </a>
          <a
            href="#"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 6rem 0 2.4rem",
              height: "6rem",
              background: "#0a1d09",
              color: "#f2f2ee",
              borderRadius: "0.6rem",
              fontSize: "1.6rem",
              position: "relative",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span style={{ fontSize: "1rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Download on
              </span>
              <span style={{ fontWeight: 500 }}>Google Play</span>
            </span>
            <span
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "6rem",
                height: "6rem",
                background: "rgba(0,0,0,0.25)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Phones */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 3.6rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          gap: "1.6rem",
        }}
      >
        <div style={{ position: "relative", width: "30%", maxWidth: "440px", aspectRatio: "697/821" }}>
          <Image src="/images/phone-1.png" alt="App screen 1" fill style={{ objectFit: "contain" }} />
        </div>
        <div style={{ position: "relative", width: "24%", maxWidth: "360px", aspectRatio: "697/821" }}>
          <Image src="/images/phone-2.png" alt="App screen 2" fill style={{ objectFit: "contain" }} />
        </div>
        <div style={{ position: "relative", width: "30%", maxWidth: "440px", aspectRatio: "697/821" }}>
          <Image src="/images/phone-3.png" alt="App screen 3" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
    </main>
  );
}
