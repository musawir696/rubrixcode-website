exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === "build-html" || stage === "develop-html") {
    // Exclude browser-only libraries from SSR
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /node_modules[\\/]react-tsparticles/,
            use: loaders.null(),
          },
          {
            test: /node_modules[\\/]tsparticles/,
            use: loaders.null(),
          },
          {
            test: /node_modules[\\/]swiper/,
            use: loaders.null(),
          },
          {
            test: /node_modules[\\/]gsap/,
            use: loaders.null(),
          },
          {
            test: /node_modules[\\/]react-modal-video/,
            use: loaders.null(),
          },
          {
            test: /node_modules[\\/]simple-parallax-js/,
            use: loaders.null(),
          },
          {
            test: /node_modules[\\/]isotope-layout/,
            use: loaders.null(),
          },
          {
            test: /src[\\/]common[\\/]thumparallax\.js$/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
