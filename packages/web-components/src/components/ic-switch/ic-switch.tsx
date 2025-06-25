import {
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Event,
  EventEmitter,
  Method,
  Watch,
} from "@stencil/core";
import {
  getInputDescribedByText,
  onComponentRequiredPropUndefined,
  renderHiddenInput,
  addFormResetListener,
  removeFormResetListener,
  removeDisabledFalse,
} from "../../utils/helpers";
import { IcSwitchChangeEventDetail } from "./ic-switch.types";
import { IcSizesNoLarge, IcThemeMode } from "../../utils/types";

let inputIds = 0;

/**
 * @slot helper-text - Content is set as the helper text for the switch.
 * @slot right-adornment - Content is placed to the right of switch.
 */
@Component({
  tag: "ic-switch",
  styleUrl: "ic-switch.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Switch {
  private inputId = `ic-switch-input-${inputIds++}`;

  @Element() el: HTMLIcSwitchElement;

  @State() checkedState: boolean = false;
  @State() initiallyChecked = this.checked;

  /**
   * If `true`, the switch will display as checked.
   */
  @Prop() checked?: boolean = false;

  @Watch("checked")
  checkedChangeHandler(): void {
    this.checkedState = !!this.checked;
  }

  /**
   * If `true`, the disabled state will be set.
   */
  @Prop() disabled?: boolean = false;
  @Watch("disabled")
  watchDisabledHandler(): void {
    removeDisabledFalse(this.disabled, this.el);
  }

  /**
   * The helper text that will be displayed for additional field guidance.
   */
  @Prop() helperText?: string = "";

  /**
   * If `true`, the label will be hidden and the required label value will be applied as an aria-label.
   */
  @Prop() hideLabel?: boolean = false;

  /**
   * The aria-label applied to the switch when no visual 'name' is provided.
   */
  @Prop() label!: string;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name?: string = this.inputId;

  /**
   * The size of the switch component.
   */
  @Prop() size?: IcSizesNoLarge = "medium";

  /**
   * Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component.
   */
  @Prop() theme?: IcThemeMode = "inherit";

  /**
   * The value of the toggle does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
   * it's only used when the toggle participates in a native `<form>`.
   */
  @Prop() value?: string | null = "on";

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() icBlur!: EventEmitter<void>;

  /**
   * Emitted when the value property has changed.
   */
  @Event() icChange!: EventEmitter<IcSwitchChangeEventDetail>;

  /**
   * Emitted when the toggle has focus.
   */
  @Event() icFocus!: EventEmitter<void>;

  disconnectedCallback(): void {
    removeFormResetListener(this.el, this.handleFormReset);
  }

  componentWillLoad(): void {
    this.checkedState = this.checked!;
    addFormResetListener(this.el, this.handleFormReset);
    removeDisabledFalse(this.disabled, this.el);
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Switch"
    );
  }

  /**
   * Sets focus on the switch.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.el.shadowRoot?.querySelector("input")?.focus();
  }

  private handleChange = () => {
    this.checkedState = !this.checkedState;
    this.icChange.emit({
      checked: this.checkedState,
      value: this.value!,
    });
  };

  private onFocus = () => {
    this.icFocus.emit();
  };

  private onBlur = () => {
    this.icBlur.emit();
  };

  private handleFormReset = (): void => {
    this.checkedState = this.initiallyChecked!;
  };

  render() {
    const {
      label,
      checkedState,
      size,
      disabled,
      name,
      value,
      hideLabel,
      helperText,
      inputId,
      theme,
    } = this;

    const isSmall = size === "small";

    renderHiddenInput(this.el, checkedState ? value : "", name, disabled);

    return (
      <Host
        class={{
          [`ic-theme-${theme}`]: theme !== "inherit",
        }}
      >
        <label
          class={{
            "ic-switch-container": true,
            "ic-switch-disabled": !!disabled,
            "ic-switch-small": isSmall,
          }}
          htmlFor={inputId}
        >
          {!hideLabel && (
            <ic-input-label
              for={inputId}
              label={label}
              helperText={helperText}
              readonly={false}
              disabled={disabled}
              class={{
                "ic-switch-label": true,
                "ic-switch-label-small": isSmall,
              }}
            >
              <slot name="helper-text" slot="helper-text"></slot>
            </ic-input-label>
          )}
          {!hideLabel && <span class="ic-switch-line-break"></span>}
          <input
            checked={checkedState}
            disabled={disabled}
            aria-label={label}
            aria-checked={checkedState ? "true" : "false"}
            aria-describedby={getInputDescribedByText(
              this.el,
              inputId,
              helperText !== "",
              false
            )}
            role="switch"
            class="ic-switch-input"
            type="checkbox"
            name="toggle"
            id={inputId}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.handleChange}
          />
          <span class="ic-switch-toggle">
            <svg
              class="ic-switch-icon"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                class="ic-switch-icon-line"
                x1="9"
                y1={isSmall ? "2" : "1"}
                x2="9"
                y2={isSmall ? "8" : "9"}
              />
            </svg>
            <svg
              class="ic-switch-icon"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 10 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="ic-switch-icon-circle"
                fill="none"
                cx="5"
                cy="5"
                r={isSmall ? "3.335" : "4.445"}
              />
            </svg>
          </span>
          <slot name="right-adornment"></slot>
        </label>
      </Host>
    );
  }
}
