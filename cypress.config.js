module.exports = {
    e2e: {
      pageLoadTimeout: 60000,
      baseUrl: "https://kasirdemo.belajarqa.com",
      screenshotsFolder: "cypress/screenshots",
      videosFolder: "cypress/videos",
      defaultCommandTimeout: 5000,
      video: true,
      videoCompression: false,
      videoUploadOnPasses: false,
      specPattern: "cypress/integration/**/*.spec.js",
      chromeWebSecurity: false,
    },
    component: {
      specPattern: "cypress/components/**/*.spec.js",
    },
  };
  