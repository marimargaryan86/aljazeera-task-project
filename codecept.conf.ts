exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://aljazeera.com/',
      browser: 'safari',
      waitForTimeout: 50000, 
      smartWait: 5000, 
      windowSize: 'maximize',
      restart: false,
      keepBrowserState: true, 
      keepCookies: true, 
    },
  },
  include: {
    I: './steps_file.ts'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/most-popular.ts', './step_definitions/live-stream.ts', './step_definitions/common.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
    },
    tryTo: {
      enabled: true

    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.ts',
  name: 'aljazeera-task-project'
}