// Gatsby build optimizations

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // Disable source maps in production for smaller bundle size
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

