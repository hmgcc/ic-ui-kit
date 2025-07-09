// IcPopoverMenuNotRenderedPage displays multiple popover menus that are only rendered when open for the purpose of performance testing of the IcPopoverMenu component.
import React, { useState } from "react";
import {
  IcButton,
  IcMenuGroup,
  IcMenuItem,
  IcPopoverMenu,
  IcTheme,
  IcTypography,
} from "../../../../components";

type PageProps = {
  theme: "light" | "dark";
};

const NUM_POPOVERS = 15;

const IcPopoverMenuNotRenderedPage: React.FC<PageProps> = ({ theme }) => {
  const [popoverOpen, setPopoverOpen] = useState<boolean[]>([
    true,
    ...Array(NUM_POPOVERS - 1).fill(false),
  ]);

  const handlePopoverToggled = (idx: number) => {
    setPopoverOpen((prev) => prev.map((open, i) => (i === idx ? !open : open)));
  };

  const handlePopoverClosed = (idx: number) => {
    setPopoverOpen((prev) => prev.map((open, i) => (i === idx ? false : open)));
  };

  return (
    <IcTheme id="theme-wrapper" theme={theme}>
      <IcTypography
        variant="subtitle-small"
        style={{ padding: "var(--ic-space-md)" }}
      >
        <h1>Popover Menu Multiple Not Rendered Page</h1>
      </IcTypography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "1rem",
          width: "fit-content",
          padding: "10px",
          marginTop: "540px",
        }}
      >
        {Array.from({ length: NUM_POPOVERS }).map((_, idx) => (
          <div key={idx}>
            <IcButton
              title={`Show/hide popover ${idx + 1}`}
              id={`button-${idx}`}
              onClick={() => handlePopoverToggled(idx)}
              aria-expanded={popoverOpen[idx]}
            >
              Show/hide popover {idx + 1}
            </IcButton>
            {popoverOpen[idx] && (
              <IcPopoverMenu
                anchor={`button-${idx}`}
                aria-label={`popover-${idx}`}
                open={popoverOpen[idx]}
                onIcPopoverClosed={(event) => {
                  handlePopoverClosed(idx);
                  console.log("Popover menu closed: ", event);
                }}
              >
                <IcMenuGroup label="Edit options">
                  <IcMenuItem label="Copy" disabled />
                  <IcMenuItem label="Paste" keyboardShortcutLabel="Cmd + V" />
                </IcMenuGroup>
                <IcMenuGroup>
                  <IcMenuItem label="Format" />
                  <IcMenuItem label="Help" />
                </IcMenuGroup>
              </IcPopoverMenu>
            )}
          </div>
        ))}
      </div>
    </IcTheme>
  );
};

export default IcPopoverMenuNotRenderedPage;
