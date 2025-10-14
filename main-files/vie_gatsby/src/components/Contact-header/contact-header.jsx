import React from "react";
import ContentHeaderDate from "data/sections/contact-header.json";
import ClientOnly from "components/ClientOnly";

const ContactHeader = ({ sliderRef, blackStar }) => {
  const ParticlesComponent = React.lazy(() => {
    if (typeof window === "undefined") {
      return Promise.resolve({ default: () => null });
    }
    // Use dynamic import with webpack magic comment to prevent SSR analysis
    return import(/* webpackIgnore: true */ "react-tsparticles").then(({ default: Particles }) => {
      const { loadFull } = require("tsparticles");
      const particlesConfig = require("config/particle-config").default;
      const particlesBlackConfig = require("config/pr-s-black").default;

      return {
        default: () => {
          const particlesInit = async (engine) => {
            await loadFull(engine);
            setTimeout(() => {
              document.querySelector('#particles-js canvas')?.style.removeProperty('position');
            }, 0);
          };

          return (
            <Particles
              id="particles-js"
              init={particlesInit}
              options={blackStar ? particlesBlackConfig : particlesConfig}
            />
          );
        }
      };
    });
  });

  return (
    <header
      ref={sliderRef}
      className="pages-header circle-bg valign position-re"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="capt">
              <div className="text-center">
                <h1 className="color-font mb-10 fw-700">
                  {ContentHeaderDate.title.first} <br />
                  {ContentHeaderDate.title.second}
                </h1>
                <p>{ContentHeaderDate.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientOnly>
        <React.Suspense fallback={null}>
          <ParticlesComponent />
        </React.Suspense>
      </ClientOnly>
      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </header>
  );
};

export default ContactHeader;
