# ic-checkbox-group



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute           | Description                                                                                                                             | Type                                      | Default     |
| -------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| `disabled`           | `disabled`          | If `true`, the checkbox group will be set to the disabled state.                                                                        | `boolean`                                 | `false`     |
| `helperText`         | `helper-text`       | The helper text that will be displayed for additional field guidance.                                                                   | `string`                                  | `""`        |
| `hideLabel`          | `hide-label`        | If `true`, the label will be hidden and the required label value will be applied as an aria-label.                                      | `boolean`                                 | `false`     |
| `label` _(required)_ | `label`             | The label for the checkbox group to be displayed.                                                                                       | `string`                                  | `undefined` |
| `name` _(required)_  | `name`              | The name for the checkbox group to differentiate from other groups.                                                                     | `string`                                  | `undefined` |
| `required`           | `required`          | If `true`, the checkbox group will require a value.                                                                                     | `boolean`                                 | `false`     |
| `size`               | `size`              | The size of the checkboxes to be displayed. This does not affect the font size of the label.                                            | `"large" \| "medium" \| "small"`          | `"medium"`  |
| `theme`              | `theme`             | Sets the theme color to the dark or light theme color. "inherit" will set the color based on the system settings or ic-theme component. | `"dark" \| "inherit" \| "light"`          | `"inherit"` |
| `validationStatus`   | `validation-status` | The validation status - e.g. 'error' \| 'warning' \| 'success'.                                                                         | `"" \| "error" \| "success" \| "warning"` | `""`        |
| `validationText`     | `validation-text`   | The text to display as the validation message.                                                                                          | `string`                                  | `""`        |


## Events

| Event      | Description                         | Type                               |
| ---------- | ----------------------------------- | ---------------------------------- |
| `icChange` | Emitted when a checkbox is checked. | `CustomEvent<IcChangeEventDetail>` |


## Slots

| Slot            | Description                                               |
| --------------- | --------------------------------------------------------- |
| `"helper-text"` | Content is set as the helper text for the checkbox group. |


## Dependencies

### Depends on

- [ic-input-label](../ic-input-label)
- [ic-input-validation](../ic-input-validation)

### Graph
```mermaid
graph TD;
  ic-checkbox-group --> ic-input-label
  ic-checkbox-group --> ic-input-validation
  ic-input-label --> ic-typography
  ic-input-validation --> ic-typography
  style ic-checkbox-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


