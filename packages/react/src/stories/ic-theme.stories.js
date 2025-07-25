/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import {
  IcAlert,
  IcButton,
  IcCardVertical,
  IcCheckbox,
  IcFooter,
  IcFooterLink,
  IcHero,
  IcLink,
  IcNavigationButton,
  IcNavigationItem,
  IcSearchBar,
  IcSectionContainer,
  IcTextField,
  IcTheme,
  IcTopNavigation,
  IcTypography
} from "../components";

const Controlled = () => {
  const [color, setColour] = useState("rgb(255, 201, 60)");
  const defaultButtonClickHandler = () => {
    setColour("rgb(27, 60, 121)");
  };
  const differentButtonClickHandler = () => {
    setColour("rgb(255, 201, 60)");
  };
  return (
    <>
      <IcTheme brandColor={color} />
      <IcButton variant="primary" onClick={defaultButtonClickHandler}>
        Default brand
      </IcButton>
      <IcButton variant="primary" onClick={differentButtonClickHandler}>
        Sunset brand
      </IcButton>
    </>
  );
};

const defaultArgs = {
  brandColor: "rgba(27, 60, 121, 1)",
  theme: "light",
};

const defaultThemeArgs = {
  theme: "light",
  componentTheme: "light",
};

export default {
  title: "Theme",
  component: "IcTheme",
};

export const SwitchBrand = {
  render: () => (
    <>
      <Controlled />
    <div>
      <br />
      <IcTopNavigation
        appTitle="ApplicationName"
        status="alpha"
        version="v0.0.7"
      >
        <svg
          slot="app-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
        <IcSearchBar slot="search" placeholder="Search" label="Search" />
        <IcNavigationButton
          label="button1"
          slot="buttons"
          onClick={() => alert("test")}
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
          </svg>
        </IcNavigationButton>
        <IcNavigationItem label="Navigation" href="/" slot="navigation" />
        <IcNavigationItem label="Navigation" href="/" slot="navigation" />
        <IcNavigationItem label="Navigation" href="/" slot="navigation" />
        <IcNavigationItem
          label="Navigation"
          href="/"
          selected="true"
          slot="navigation"
        />
        <IcNavigationItem label="Navigation" href="/" slot="navigation" />
      </IcTopNavigation>
      <IcHero
        heading="Hero heading"
        subheading="Hero description. This is a Hero component, it should be used as a page heading."
        secondary-heading="Secondary Heading"
        secondary-subheading="This is a secondary description."
        full-width
      >
        <div slot="interaction" style={{ display: "flex" }}>
          <IcTextField
            placeholder="Filter display"
            label="Filter display"
            hide-label
          ></IcTextField>
          <IcButton variant="primary" style={{ marginLeft: 16 }}>
            Filter
          </IcButton>
        </div>
        <IcButton variant="secondary" slot="interaction">
          See all
        </IcButton>
        <IcLink
          href="https://google.com"
          slot="interaction"
          style={{ marginTop: 10 }}
        >
          Help
        </IcLink>
      </IcHero>
      <IcAlert
        heading="This alert uses a custom message slot"
        dismissible="true"
      >
        <IcButton slot="action" variant="secondary">
          Button
        </IcButton>
        <IcTypography variant="body" slot="message">
          <p>
            This is some text and
            <IcLink href="/"> this is an inline link ic-link</IcLink>
            within the text
          </p>
        </IcTypography>
      </IcAlert>
      <IcFooter
        aligned="full-width"
        description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
            please get in touch."
        caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
      >
        <IcFooterLink slot="link" href="/">
          Get Started
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Accessibility
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Styles
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Components
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Patterns
        </IcFooterLink>
        <IcFooterLink slot="link" href="/">
          Design toolkit
        </IcFooterLink>
        <div
          slot="logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--ic-space-sm)",
          }}
        >
          <IcButton>Slotted Button</IcButton>
          <IcFooterLink href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
            </svg>
          </IcFooterLink>
        </div>
      </IcFooter>
    </div>
    </>
  ),
  name: "Switch brand",

  parameters: {
    layout: "fullscreen",
  },
};

export const Playground = {
  render: (args) => {
    return (
      <>
        <IcTheme brandColor={args.brandColor} theme={args.theme}>
          <IcTopNavigation
            appTitle="ApplicationName"
            status="alpha"
            version="v0.0.7"
          >
            <svg
              slot="app-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
            </svg>
            <IcSearchBar slot="search" placeholder="Search" label="Search" />
            <IcNavigationButton
              label="button1"
              slot="buttons"
              onClick={() => alert("test")}
            >
              <svg
                slot="icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
              </svg>
            </IcNavigationButton>
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
            <IcNavigationItem
              label="Navigation"
              href="/"
              selected="true"
              slot="navigation"
            />
            <IcNavigationItem label="Navigation" href="/" slot="navigation" />
          </IcTopNavigation>
          <IcHero
            heading="Hero heading"
            subheading="Hero description. This is a Hero component, it should be used as a page heading."
            secondary-heading="Secondary Heading"
            secondary-subheading="This is a secondary description."
            full-width
          >
            <div
              slot="interaction"
              style={{
                display: "flex",
              }}
            >
              <IcTextField
                placeholder="Filter display"
                label="Filter display"
                hide-label
              ></IcTextField>
              <IcButton
                variant="primary"
                style={{
                  marginLeft: 16,
                }}
              >
                Filter
              </IcButton>
            </div>
            <IcButton variant="secondary" slot="interaction">
              See all
            </IcButton>
            <IcLink
              href="https://google.com"
              slot="interaction"
              style={{
                marginTop: 10,
              }}
            >
              Help
            </IcLink>
          </IcHero>
          <IcSectionContainer
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <IcCheckbox
              value="valueName1"
              label="Unselected / Default"
            ></IcCheckbox>
            <IcTextField
              label="What is your favourite coffee?"
              required
              placeholder="Placeholder"
              helperText="Such as Arabica, Robusta or Liberica"
            ></IcTextField>
            <IcAlert
              heading="This alert uses a custom message slot"
              dismissible="true"
            >
              <IcButton slot="action" variant="secondary">
                Button
              </IcButton>
              <IcTypography variant="body" slot="message">
                <p>
                  This is some text and
                  <IcLink href="/">this is an inline link ic-link</IcLink>within
                  the text
                </p>
              </IcTypography>
            </IcAlert>
            <IcCardVertical heading="This is the card heading"></IcCardVertical>
            <div
              style={{
                border: "1px solid #ffffff",
                padding: "0.25rem",
                margin: "0.25rem",
              }}
            >
              <span
                style={{
                  color: "var(--ic-color-page-background-light)",
                }}
              >
                This content is in an ic-theme component with dark mode set
              </span>
              <IcTheme theme="dark">
                <IcCardVertical heading="This is the card heading"></IcCardVertical>
                <IcTextField
                  label="What is your favourite coffee?"
                  required
                  placeholder="Placeholder"
                  helperText="Such as Arabica, Robusta or Liberica"
                ></IcTextField>
              </IcTheme>
            </div>
          </IcSectionContainer>
          <IcFooter
            align="full-width"
            description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, \n            please get in touch."
            caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
          >
            <IcFooterLink slot="link" href="/">
              Get Started
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Accessibility
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Styles
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Components
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Patterns
            </IcFooterLink>
            <IcFooterLink slot="link" href="/">
              Design toolkit
            </IcFooterLink>
            <div
              slot="logo"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--ic-space-sm)",
              }}
            >
              <IcButton>Slotted Button</IcButton>
              <IcFooterLink href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48px"
                  viewBox="0 0 24 24"
                  width="48px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
                </svg>
              </IcFooterLink>
            </div>
          </IcFooter>
        </IcTheme>
      </>
    );
  },

  args: defaultArgs,

  argTypes: {
    theme: {
      options: ["system", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Playground",
};

export const ThemeVisualisationPlayground = {
  render: (args) => {
    return (
      <>
        <div
          style={{
            width: "450px",
            height: "150px",
            backgroundColor:
              args.theme == "dark"
                ? "black"
                : args.theme == "light"
                  ? "white"
                  : null,
          }}
        >
          <IcTheme theme={args.theme}>
            <div
              style={{
                width: "250px",
                backgroundColor:
                  args.componentTheme == "dark"
                    ? "black"
                    : args.componentTheme == "light"
                      ? "white"
                      : null,
              }}
            >
              <IcTypography theme={args.componentTheme}>
                Theme test
              </IcTypography>
            </div>
          </IcTheme>
        </div>
      </>
    );
  },

  args: defaultThemeArgs,

  argTypes: {
    theme: {
      options: ["system", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },

    componentTheme: {
      options: ["inherit", "light", "dark"],

      control: {
        type: "inline-radio",
      },
    },
  },

  name: "Theme visualisation playground",
};
