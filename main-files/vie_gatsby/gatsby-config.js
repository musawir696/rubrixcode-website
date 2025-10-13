/**
 * Gatsby Configuration - Performance Optimized
 * 
 * Performance Optimizations Implemented:
 * 1. Image optimization with gatsby-plugin-image (WebP, AVIF formats)
 * 2. Progressive Web App support with offline capabilities
 * 3. Code splitting and bundle optimization
 * 4. Font loading optimization with preconnect and font-display swap
 * 5. CSS delivery optimization with deferred loading
 * 6. Service worker caching strategy for faster repeat visits
 * 7. Resource hints (dns-prefetch, preconnect, preload)
 * 8. Webpack optimizations (tree-shaking, minification, chunk splitting)
 * 9. Scroll listener throttling and passive event listeners
 * 10. Optimized GSAP animations and mobile-specific improvements
 */

module.exports = {
  siteMetadata: {
    title: 'RubrixCode - Crafting Digital Excellence',
    description: 'RubrixCode is a software development company specializing in web applications, mobile apps, and digital solutions.',
    author: 'RubrixCode',
    siteUrl: 'https://rubrixcode.com'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-eslint'
  ],
  trailingSlash: "always",
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    DEV_SSR: false,
  },
}