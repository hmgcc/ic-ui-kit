/* eslint-disable react/jsx-no-bind */
/// <reference types="cypress" />

import React from "react";
import { IcBadge, IcToggleButton } from "../../components";
import { CYPRESS_AXE_OPTIONS } from "../../../cypress/utils/a11y";
import { mount } from "cypress/react";
import {
  HAVE_BEEN_CALLED_ONCE,
  HAVE_CLASS,
  NOT_BE_CALLED_ONCE,
  NOT_HAVE_CLASS,
} from "../utils/constants";
import { setThresholdBasedOnEnv } from "../../../cypress/utils/helpers";
import {
  Dark,
  IconPlacementRight,
  IconPlacementTop,
  IconVariant,
  Light,
  WithIcon,
  TooltipPlacement,
} from "./IcToggleButtonTestData";

const IC_TOGGLE_BUTTON_SELECTOR = "ic-toggle-button";
const DEFAULT_TEST_THRESHOLD = 0.0;

/**
 * Justification for additional rule: in the browser this is
 * not reported as an issue by axe Devtools, but it upsets cypress
 */
const TOGGLE_BUTTON_AXE_OPTIONS = {
  rules: {
    ...CYPRESS_AXE_OPTIONS.rules,
    "nested-interactive": { enabled: false },
  },
};

const WIN_CONSOLE_SPY = "@spyWinConsoleLog";
const CHECKED_SELECTOR = "ic-toggle-button-checked";

describe("IcToggleButton end-to-end tests", () => {
  it("should render", () => {
    mount(<IcToggleButton label="Test" />);

    cy.get(IC_TOGGLE_BUTTON_SELECTOR).should("exist");
  });

  it("should switch to checked when clicked", () => {
    mount(<IcToggleButton label="Test Clickable" />);

    cy.get(IC_TOGGLE_BUTTON_SELECTOR).invoke(
      "on",
      "icToggleChecked",
      cy.stub().as("icToggleChecked")
    );
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).should(NOT_HAVE_CLASS, CHECKED_SELECTOR);
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).click();
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).should(HAVE_CLASS, CHECKED_SELECTOR);
    cy.get("@icToggleChecked").should(HAVE_BEEN_CALLED_ONCE);
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).click();
    cy.get(IC_TOGGLE_BUTTON_SELECTOR).should(NOT_HAVE_CLASS, CHECKED_SELECTOR);
  });

  it("should not be clickable when disabled", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(
      <IcToggleButton
        label="Test"
        disabled
        onClick={() => console.log("foo")}
      />
    );

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);
    cy.clickOnButton(IC_TOGGLE_BUTTON_SELECTOR);

    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });

  it("should have loading bar when loading", () => {
    mount(<IcToggleButton label="test" loading />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);
    cy.findShadowEl(IC_TOGGLE_BUTTON_SELECTOR, "ic-button")
      .shadow()
      .find("ic-loading-indicator")
      .should("exist");
  });

  it("should not be clickable when loading", () => {
    cy.spy(window.console, "log").as("spyWinConsoleLog");
    mount(<IcToggleButton label="test" loading />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);
    cy.clickOnButton(IC_TOGGLE_BUTTON_SELECTOR);
    cy.get(WIN_CONSOLE_SPY).should(NOT_BE_CALLED_ONCE);
  });
});

describe("IcToggleButton visual regression and a11y tests", () => {
  beforeEach(() => {
    cy.injectAxe();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  it("should render default", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/default",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render checked", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/checked",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render disabled", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" disabled />
        <IcToggleButton label="Test Checked" disabled checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/disabled",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with icon", () => {
    mount(<WithIcon />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/with-icon",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render different sizes", () => {
    mount(
      <div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="small" />
        </div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="medium" />
        </div>
        <div style={{ padding: "8px" }}>
          <IcToggleButton label="Test" size="large" />
        </div>
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/sizes",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.019),
    });
  });

  it("should render with badge", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test">
          <IcBadge label="1" slot="badge" variant="success" />
        </IcToggleButton>
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, 100, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/with-badge",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render full width", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" fullWidth />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/full-width",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it.skip("should render loading", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" loading />
        <IcToggleButton label="Test" loading checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/loading",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render icon variant", () => {
    mount(<IconVariant />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/icon-variant",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });

  it("should render with icon placement right", () => {
    mount(<IconPlacementRight />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/icon-right",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.012),
    });
  });

  it("should render with icon placement top", () => {
    mount(<IconPlacementTop />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/icon-top",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.011),
    });
  });

  it("should render various tooltip placements", () => {
    mount(<TooltipPlacement />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.findShadowEl(IC_TOGGLE_BUTTON_SELECTOR, "ic-button")
      .shadow()
      .find("button")
      .eq(0)
      .focus();

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/tooltip-placement-right",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });

    cy.findShadowEl(IC_TOGGLE_BUTTON_SELECTOR, "ic-button")
      .shadow()
      .find("button")
      .eq(1)
      .focus();

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/tooltip-placement-top",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });

    cy.findShadowEl(IC_TOGGLE_BUTTON_SELECTOR, "ic-button")
      .shadow()
      .find("button")
      .eq(2)
      .focus();

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/tooltip-placement-left",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.032),
    });
  });

  it("should render with monochrome set to true", () => {
    mount(<Dark />);
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/light-theme-monochrome",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.049),
    });
  });

  it("should render with dark theme and monochrome set to true", () => {
    mount(<Light />);
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/dark-theme-monochrome",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.049),
    });
  });

  it("should render checked and focused toggle button with dark theme", () => {
    mount(
      <div style={{ padding: "10px" }}>
        <IcToggleButton label="Test" theme="dark" checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.findShadowEl(IC_TOGGLE_BUTTON_SELECTOR, "ic-button")
      .shadow()
      .find("button")
      .focus();

    cy.checkA11yWithWait(undefined, undefined, TOGGLE_BUTTON_AXE_OPTIONS);
    cy.compareSnapshot({
      name: "/dark-theme-checked-focused",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.007),
    });
  });
});

describe("IcToggleButton visual regression tests in high contrast mode", () => {
  before(() => {
    cy.enableForcedColors();
  });

  afterEach(() => {
    cy.task("generateReport");
  });

  after(() => {
    cy.disableForcedColors();
  });

  it("should render default in high contrast mode", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "/default-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render checked in high contrast mode", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "/checked-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.013),
    });
  });

  it("should render disabled in high contrast mode", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" disabled />
        <IcToggleButton label="Test Checked" disabled checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "/disabled-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.02),
    });
  });

  it("should render loading in high contrast mode", () => {
    mount(
      <div style={{ padding: "8px" }}>
        <IcToggleButton label="Test" loading />
        <IcToggleButton label="Test" loading checked />
      </div>
    );
    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "/loading-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD + 0.01),
    });
  });

  it("should render icon variant in high contrast mode", () => {
    mount(<IconVariant />);

    cy.checkHydrated(IC_TOGGLE_BUTTON_SELECTOR);

    cy.compareSnapshot({
      name: "/icon-variant-high-contrast",
      testThreshold: setThresholdBasedOnEnv(DEFAULT_TEST_THRESHOLD),
    });
  });
});
