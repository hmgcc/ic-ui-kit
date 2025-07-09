// IcAccordionMultiplePage displays multiple accordion groups for the purpose of performance testing of the IcAccordion component.
import React from "react";
import {
  IcAccordion,
  IcAccordionGroup,
  IcTypography,
  IcTheme,
} from "../../../../components";
import { SlottedSVG } from "../../../../react-component-lib/slottedSVG";

const ACCORDION_ICON = (
  <SlottedSVG
    slot="icon"
    width="20"
    height="1em"
    viewBox="0 0 512 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
  </SlottedSVG>
);

type PageProps = {
  theme: "light" | "dark";
};

const Accordion = () => (
  <IcAccordionGroup label="Title of the Accordion Group">
    <IcAccordion heading="Accordion 1">
      {ACCORDION_ICON}
      <IcTypography variant="body">
        This is an example of the main body text
      </IcTypography>
    </IcAccordion>
    <IcAccordion heading="Accordion 2">
      {ACCORDION_ICON}
      <IcTypography variant="body">
        This is an example of the main body text
      </IcTypography>
    </IcAccordion>
    <IcAccordion heading="Accordion 3">
      {ACCORDION_ICON}
      <IcTypography variant="body">
        This is an example of the main body text
      </IcTypography>
    </IcAccordion>
    <IcAccordion heading="Accordion 4">
      {ACCORDION_ICON}
      <IcTypography variant="body">
        This is an example of the main body text
      </IcTypography>
    </IcAccordion>
  </IcAccordionGroup>
);

const IcAccordionMultiplePage: React.FC<PageProps> = ({ theme }) => {
  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <div style={{ padding: "var(--ic-space-md)" }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <Accordion key={i} />
        ))}
      </div>
    </IcTheme>
  );
};

export default IcAccordionMultiplePage;
