# [Canary]: The UK Intelligence Community React UI Kit

[![OGL V3 License](https://img.shields.io/badge/license-OGLv3-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mi6/ic-design-system/tree/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@ukic/canary-react.svg)](https://npmjs.com/package/@ukic/canary-react)

The [Intelligence Community Design System](https://design.sis.gov.uk) helps the United Kingdom's Intelligence Community (MI6, GCHQ, MI5, and partners) to quickly build powerful capabilities that are accessible and easy to use.

This is a joint project led by [MI6](https://www.sis.gov.uk), working with [GCHQ](https://www.gchq.gov.uk), [MI5](https://www.mi5.gov.uk) and [HMGCC](https://www.hmgcc.gov.uk) (our national security partner).

## Installing

To install the components:

### Step one

In the root of your project:

```shell
# using npm
npm install @ukic/canary-react @ukic/fonts

# using yarn
rm package-lock.json
yarn add @ukic/canary-react @ukic/fonts
```

### Step two

To get the correct styling with the ICDS components, import the core CSS file.

Add the following into the top level CSS file for your project.

```css
@import "@ukic/fonts/dist/fonts.css";
@import "@ukic/canary-react/dist/core/core.css";
```

In order to be rendered consistently across browsers and in line with modern standards, each of the ICDS components uses styles from a global CSS file based on [Normalize.css](https://necolas.github.io/normalize.css/). 

If you would like to import these styles in order to apply them to the rest of your project and slotted elements used within any of the ICDS components, add the following into the top level CSS file as well.

```css
@import "@ukic/canary-react/dist/core/normalize.css";
```

### Step three

Import the component(s) in your React files.

```jsx
import { IcComponent } from "@ukic/canary-react";
```

### Step four

The `@ukic/canary-react` package will need to be transformed before you can use these components in Jest tests.

Add a `transformIgnorePatterns` field with the value `["/node_modules/(?!@ukic/canary-react)"]` to your Jest config.

## Typescript

If your project is making use of Typescript, you can import the custom types used in the ICDS component library. For details on the types implemented in each component, refer to the Props table on the Code page for each Component on the [Design System Guidance site](https://design.sis.gov.uk/components/select/code)

Types can be imported from the @ukic/canary-web-components package as per the below example. 

> [!NOTE]  
> You do not have to install this package into your project, it is already installed as a dependency of @ukic/canary-react. 

```ts
import { IcPaginationBarOptions } from '@ukic/canary-web-components';

let paginationConfig: IcPaginationBarOptions = {
  itemsPerPageOptions: [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
  ],
  showItemsPerPageControl: true,
  selectedItemsPerPage: 5,
}
```

## Security

If you've found a vulnerability, we want to know so that we can fix it. [Our security policy](https://github.com/mi6/ic-ui-kit/blob/main/SECURITY.md) tells you how to do this.

## License

Unless stated otherwise, the codebase is released under the [MIT License](https://opensource.org/licenses/MIT). This covers both the codebase and any sample code in the documentation. The documentation is and available under the terms of the [Open Government License v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).

© Crown copyright 2022