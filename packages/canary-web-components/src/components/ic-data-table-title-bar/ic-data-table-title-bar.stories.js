/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { html } from "lit-html";
import readme from "./readme.md";

export default {
  title: "Web Components/Data Table Title Bar",
  component: "ic-data-table-title-bar",
  parameters: {
    componentAPI: {
      data: readme,
    },
  },
};

/**
 * Use the data table title bar component to provide titling, description, metadata and also global table functionality.
 *
 * By default, the density selector appears within the data table title bar. The three density options are:
 * - Default
 * - Dense
 * - Spacious
 */
export const Basic = {
  render: () => html`<ic-data-table-title-bar
    heading="Title Bar"
  ></ic-data-table-title-bar>`,
  name: "Basic",
  height: "220px",
};

/**
 * Custom elements can be passed into the areas which contain the title bar heading and description. This flexibility allows the heading tag to be updated if the default heading level (i.e. `h3`) is not semantically correct.
 */
export const Slots = {
  render: () => html`
    <ic-data-table-title-bar>
      <ic-typography slot="heading" variant="h1"
        ><h3>Title Bar</h3></ic-typography
      >
      <div slot="description">
        <ic-chip label="Chip"></ic-chip>
        <ic-chip label="Chip"></ic-chip>
      </div>
    </ic-data-table-title-bar>
  `,
  name: "Slots",
  height: "220px",
};

/**
 * Data table metadata and description can be added to the data table title bar via the `metadata` and `description` props.
 */
export const MetadataDescriptions = {
  render: () => html`<ic-data-table-title-bar
    heading="Title Bar"
    metadata="128 items | 32gb | Updated: 01/02/03"
    description="Data table description that describes the purpose of the table."
  ></ic-data-table-title-bar>`,
  name: "With metadata and description",
  height: "220px",
};

/**
 * By default, the density selector is displayed on the data table title bar. To hide it, set `hide-density-select` to `true`.
 */
export const HideDensitySelector = {
  render: () => html`<ic-data-table-title-bar
    hide-density-select="true"
    heading="Title Bar"
    metadata="128 items | 32gb | Updated: 01/02/03"
    description="Data table description that describes the purpose of the table."
  ></ic-data-table-title-bar>`,
  name: "Hide density selector",
};

/**
 * Custom actions can be added to the data table title bar via slots. There are two slots available:
 * - `primary-action` is suitable for a primary button. The custom element will appear to the right of the data table title bar.
 * - `custom-actions` can be used for secondary actions. The custom element will appear to the left of the density selector if displayed.
 */
export const CustomActions = {
  render: () => html`<ic-data-table-title-bar
    heading="Title Bar"
    metadata="128 items | 32gb | Updated: 01/02/03"
    description="Data table description that describes the purpose of the table."
  >
    <ic-button slot="primary-action" size="small">Primary</ic-button>
    <ic-button
      slot="custom-actions"
      variant="icon-tertiary"
      aria-label="Icon Button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path
          d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm56-97h489L578-473 446-302l-93-127-117 152Zm-56 97v-600 600Z"
        />
      </svg>
    </ic-button>
  </ic-data-table-title-bar>`,
  name: "Custom actions",
  height: "220px",
};
