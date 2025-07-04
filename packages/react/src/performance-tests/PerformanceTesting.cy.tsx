/// <reference types="@cypress-audit/lighthouse" />

const defaultThresholds = {
  performance: 80,
  accessibility: 100,
  "first-contentful-paint": 2000,
  "largest-contentful-paint": 3000,
  "speed-index": 2000,
};

const desktopConfig = {
  formFactor: "desktop",
  screenEmulation: {
    disabled: true,
    mobile: false,
  },
};

const smallScreenConfig = {
  formFactor: "desktop",
  screenEmulation: {
    mobile: false,
    width: 390,
    height: 844,
  },
};

const lighthouseConfig = {
  settings: { output: "html" },
  extends: "lighthouse:default",
};

describe("Button performance", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render single button within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/button?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-button-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple buttons within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/button-multiple?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-button-multiple-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });

    it(`should render multiple variants of button within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/button-variants?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-button-variants-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple buttons with event handlers within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/button-events?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-button-events-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });
  });
});

describe("Checkbox performance", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render single checkbox within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/checkbox?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-checkbox-single-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple checkboxes within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/checkbox-multiple?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-checkbox-multiple-${theme}`
      );
      cy.lighthouse(
        {
          performance: 60,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple basic checkboxes within performance thresholds [${theme}]`, () => {
      cy.visit(
        `http://localhost:3001/#/checkbox-basic-multiple?theme=${theme}`
      );
      cy.task(
        "setLighthouseReportName",
        `lighthouse-checkbox-basic-multiple-${theme}`
      );
      cy.lighthouse(
        {
          performance: 70,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });
  });
});

describe("Side navigation performance", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render side navigation within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/side-navigation?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-side-navigation-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });

    it(`should render expanded side navigation within performance thresholds [${theme}]`, () => {
      cy.visit(
        `http://localhost:3001/#/side-navigation-expanded?theme=${theme}`
      );
      cy.task(
        "setLighthouseReportName",
        `lighthouse-side-navigation-expanded-${theme}`
      );
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });
  });
});

describe("Top navigation performance", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render basic top navigation within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/top-navigation-basic?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-top-navigation-basic-${theme}`
      );
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render top navigation with navigation within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/top-navigation?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-top-navigation-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });

    it(`should render top navigation at small screen sizes within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/top-navigation?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-top-navigation-small-screen-${theme}`
      );
      cy.lighthouse(defaultThresholds, smallScreenConfig, lighthouseConfig);
    });
  });
});

describe("Popover menu performance", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render popover menu within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/popover-menu?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-popover-menu-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });

    it(`should render multiple popover menus within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/popover-menu-multiple?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-popover-menu-multiple-${theme}`
      );
      cy.lighthouse(
        {
          performance: 70,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple popover menus that are not rendered on page load within performance thresholds [${theme}]`, () => {
      cy.visit(
        `http://localhost:3001/#/popover-menu-multiple-not-rendered?theme=${theme}`
      );
      cy.task(
        "setLighthouseReportName",
        `lighthouse-popover-menu-multiple-not-rendered-${theme}`
      );
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });
  });
});

describe("Accordion performance", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render accordion within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/accordion?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-accordion-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });

    it(`should render multiple accordions within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/accordion-multiple?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-accordion-multiple-${theme}`
      );
      cy.lighthouse(
        {
          performance: 75,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });
  });
});

describe("Dialog performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render dialog within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/dialog?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-dialog-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render dialog with slotted content within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/dialog-slotted-content?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-dialog-slotted-content-${theme}`
      );
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });

    it(`should render multiple dialogs within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/dialog-multiple?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-dialog-multiple-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });

    it(`should render multiple open dialogs within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/dialog-all-open?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-dialog-all-open-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });
  });
});

describe("Select performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render single select within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/select?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-select-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render single select variants within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/select-variants?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-select-variants-${theme}`);
      // accessibility threshold is set to 97 due to insufficient contrast ratios on disabled text
      cy.lighthouse(
        {
          performance: 75,
          accessibility: 97,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple selects within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/select-multiple?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-select-multiple-${theme}`);
      cy.lighthouse(
        {
          performance: 70,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render searchable select within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/searchable-select?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-searchable-select-${theme}`
      );
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render searchable select variants within performance thresholds [${theme}]`, () => {
      cy.visit(
        `http://localhost:3001/#/searchable-select-variants?theme=${theme}`
      );
      cy.task(
        "setLighthouseReportName",
        `lighthouse-searchable-select-variants-${theme}`
      );
      // accessibility threshold is set to 98 due to insufficient contrast ratios on disabled text
      cy.lighthouse(
        {
          performance: 75,
          accessibility: 98,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple searchable selects within performance thresholds [${theme}]`, () => {
      cy.visit(
        `http://localhost:3001/#/searchable-select-multiple?theme=${theme}`
      );
      cy.task(
        "setLighthouseReportName",
        `lighthouse-searchable-select-multiple-${theme}`
      );
      cy.lighthouse(
        {
          performance: 70,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multi select within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/multi-select?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-multi-select-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multi select variants within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/multi-select-variants?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-multi-select-variants-${theme}`
      );
      // accessibility threshold is set to 97 due to insufficient contrast ratios on disabled text
      cy.lighthouse(
        {
          performance: 75,
          accessibility: 97,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple multi selects within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/multi-select-multiple?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-multi-select-multiple-${theme}`
      );
      cy.lighthouse(
        {
          performance: 70,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });
  });
});

describe("Search bar performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render search bar within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/searchbar?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-searchbar-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render search bar variants within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/searchbar-variants?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-searchbar-variants-${theme}`
      );
      // accessibility threshold is set to 98 due to insufficient contrast ratios on disabled text
      cy.lighthouse(
        {
          performance: 80,
          accessibility: 98,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple search bars within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/searchbar-multiple?theme=${theme}`);
      cy.task(
        "setLighthouseReportName",
        `lighthouse-searchbar-multiple-${theme}`
      );
      cy.lighthouse(
        {
          performance: 70,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });
  });
});

describe("Radio performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render single radio within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/radio?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-radio-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render radio variants within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/radio-variants?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-radio-variants-${theme}`);
      // accessibility threshold is set to 97 due to insufficient contrast ratios on disabled text
      cy.lighthouse(
        {
          performance: 80,
          accessibility: 97,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render multiple radios within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/radio-multiple?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-radio-multiple-${theme}`);
      cy.lighthouse(
        {
          performance: 75,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });
  });
});

describe("Toast performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render single toast within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/toast?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-toast-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render toast variants within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/toast-variants?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-toast-variants-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });

    it(`should render multiple toasts within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/toast-multiple?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-toast-multiple-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });
  });
});

describe("Hero performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render hero within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/hero?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-hero-${theme}`);
      cy.lighthouse(defaultThresholds, desktopConfig, lighthouseConfig);
    });
  });
});

describe("Page header performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render page header within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/page-header?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-page-header-${theme}`);
      cy.lighthouse(
        {
          performance: 75,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });
  });
});

describe("Footer performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render footer within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/footer?theme=${theme}`);
      cy.task("setLighthouseReportName", `lighthouse-footer-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });
  });
});

describe("Stepper performance testing", () => {
  ["light", "dark"].forEach((theme) => {
    it(`should render default stepper within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/stepper?theme=${theme}`, {
        onBeforeLoad: (win) => {
          win.ResizeObserver = class {
            constructor() {}
            observe() {}
            unobserve() {}
            disconnect() {}
          };
        },
      });
      cy.task("setLighthouseReportName", `lighthouse-stepper-${theme}`);
      // accessibility threshold is set to 97 due to insufficient contrast ratios on disabled text
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 97,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        desktopConfig,
        lighthouseConfig
      );
    });

    it(`should render compact stepper within performance thresholds [${theme}]`, () => {
      cy.visit(`http://localhost:3001/#/stepper?theme=${theme}`, {
        onBeforeLoad: (win) => {
          win.ResizeObserver = class {
            constructor() {}
            observe() {}
            unobserve() {}
            disconnect() {}
          };
        },
      });
      cy.task("setLighthouseReportName", `lighthouse-stepper-compact-${theme}`);
      cy.lighthouse(
        {
          performance: 85,
          accessibility: 100,
          "first-contentful-paint": 2000,
          "largest-contentful-paint": 3000,
          "speed-index": 2000,
        },
        smallScreenConfig,
        lighthouseConfig
      );
      cy.lighthouse(defaultThresholds, smallScreenConfig, lighthouseConfig);
    });
  });
});
