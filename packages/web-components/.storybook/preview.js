import "../src/global/normalize.css";
import "@ukic/fonts/dist/fonts.css";
import "../src/global/icds.css";
import "./storybook-overrides.css";
import { html } from "lit";
import { defineCustomElements } from "../dist/esm/loader";

defineCustomElements();

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true,
    },
    options: {
      storySort: {
        method: 'configure',
        includeNames: true,
        order: ['*', ['*', ['Docs', 'Playground']]],
      },
    },
  },

  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light mode", left: "☀️" },
          { value: "dark", title: "Dark mode", left: "🌙" },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: "light",
  },

  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme || "light";
      const backgroundColor =
        selectedTheme === "dark"
          ? "var(--ic-color-page-background-dark)"
          : "var(--ic-color-background-primary-light)";
      return html`
        <style>
          .sb-show-main {
            background-color: ${backgroundColor};
          }
        </style>
        <ic-theme theme=${selectedTheme}>${story()}</ic-theme>
      `;
    },
  ],
};

export default preview;
