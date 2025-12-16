/**
 * Hero component - displays a fullscreen hero section with background image,
 * headline, subheadline, and a call-to-action button.
 */
const Hero = () => {
  return (
    <section>
      {/* Hero container with background image and styling */}
      <div
        className="swiper-container hero"
        style={{
          backgroundImage: `url(/img/hero-bg.webp)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: '90vh',
        }}
      >
        {/* Overlay for darkening the background image */}
        <div className="overlay"></div>

        {/* Centered container for text content, vertically and horizontally aligned */}
        <div className="container h-100 d-flex justify-content-center align-items-center position-relative z-2">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="text-center">
              {/* Main headline with animation */}
              <h1 className="fs-56 ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s oswald">
                ON-SITE Metal Fabrication, Certified Welding, & 24-Hour Emergency Service
              </h1>

              {/* Subheadline with animation */}
              <p className="fs-26 text-white mb-5 animate__animated animate__zoomIn animate__delay-2s roboto">
                We come to you. Professional mobile welding and metal fabrication in Nassau.
              </p>

              {/* Call-to-action button with phone number - Safety Orange */}
              <div className="d-inline link animate__animated animate__slideInUp animate__delay-3s position-relative z-2">
                <a
                  href="tel:5162659889"
                  className="btn btn-lg primary-bg text-white rounded d-inline fw-bold"
                  style={{ backgroundColor: '#FF9900', fontSize: '1.5rem', padding: '1rem 2rem' }}
                >
                  CALL NOW (516) 265-9889
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
