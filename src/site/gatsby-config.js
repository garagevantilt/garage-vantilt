module.exports = {
  siteMetadata: {
    title: ` Garage Vantilt`,
    description: `Wij zijn een klein familiebedrijf met al meer dan 25 jaar ervaring met het onderhoud, herstellen en verkopen van voertuigen. Wij werken elke dag met veel passie om de wagens van onze klanten in topconditie te houden.`,
    author: `@maartenlouage`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Garage Vantilt`,
        short_name: `Garage Vantilt`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#466071`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-gallery`,
      options: {
        basePath: `/src`,
        galleryPath: `content/gallery`
      }
    }
  ],
}
