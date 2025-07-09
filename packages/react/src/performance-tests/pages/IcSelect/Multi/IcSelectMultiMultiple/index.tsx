// IcSelectMultiMultiplePage displays multiple multi-select components for performance testing of the IcSelect component.
import React from "react";
import { IcSelect, IcTheme, IcTypography } from "../../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const options = [
  { label: "Cappuccino", value: "Cap" },
  { label: "Latte", value: "Lat" },
  { label: "Americano", value: "Ame" },
  { label: "Filter", value: "Fil" },
  { label: "Flat white", value: "Fla" },
  { label: "Mocha", value: "Moc" },
  { label: "Macchiato", value: "Mac" },
  { label: "Café au lait", value: "Caf" },
  { label: "Espresso", value: "Esp" },
  { label: "Cortado", value: "Cor" },
  { label: "Ristretto", value: "Ris" },
  { label: "Latte macchiato", value: "Lam" },
];

const selectEvents = {
  onIcChange: (ev: any) => console.log(`icChange: ${ev.detail.value}`),
  onIcBlur: () => console.log("Select blurred"),
  onIcFocus: () => console.log("Select focused"),
  onIcInput: (ev: any) => console.log(`icInput: ${ev.detail.value}`),
  onIcOptionSelect: (ev: any) =>
    console.log(`icOptionSelect: ${ev.detail.value}`),
  onIcOptionDeselect: (ev: any) =>
    console.log(`icOptionDeselect: ${ev.detail.value}`),
  onIcOpen: () => console.log("select dropdown opened"),
  onIcClose: () => console.log("select dropdown closed"),
  onIcClear: () => console.log("clear all clicked"),
};

const IcSelectMultiMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography
        variant="subtitle-small"
        style={{ padding: "var(--ic-space-md)" }}
      >
        <h1>Select Multi Multiple Page</h1>
      </IcTypography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "1rem",
          width: "fit-content",
          padding: "10px",
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <IcSelect
            key={i}
            label="What is your favourite coffee?"
            options={options}
            multiple
            showClearButton
            helperText="Select one or more options from the list"
            {...selectEvents}
          />
        ))}
      </div>
    </IcTheme>
  );
};

export default IcSelectMultiMultiplePage;
