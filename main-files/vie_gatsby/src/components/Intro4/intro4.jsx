import React from "react";
import ClientOnly from "components/ClientOnly";

const Intro4 = ({ sliderRef, blackStar }) => {
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
            }, 500);
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
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1>
                <span className="color-font">Creativity</span> is the process of
                having <span className="color-font">original ideas</span>.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <ClientOnly>
        <React.Suspense fallback={null}>
          <ParticlesComponent />
        </React.Suspense>
      </ClientOnly>
      <div className="gradient-circle"></div>
      <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
