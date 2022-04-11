# UUI Angular

Making UUI work with Angular.

Follow the steps in the UUI repo readme: https://github.com/AonUnited/AonDesignSystem#use-united-ui-in-your-project

## Use United UI in your project

1. Create a .npmrc file in the root of your repo if one doesn't already exist
2. Add the following to the .npmrc file

   ```bash
       @aonunited:registry=https://npm.pkg.github.com
       //npm.pkg.github.com/:_authToken=AUTH_TOKEN
   ```

3. Currently this package is private and requires an authToken to install. Please contact niall.ryan@aon.ie or oleg.chursin@aon.com for the authToken
4. run `npm install @aonunited/web-components`
5. Go to the root of your project (this is `app.module.ts`) and add the below code:

   ```typescript
   import {
     applyPolyfills,
     defineCustomElements
   } from '@aonunited/web-components/loader';

   applyPolyfills().then(() => {
     defineCustomElements(window);
   });
   ```

6. Add `schemas: [CUSTOM_ELEMENTS_SCHEMA]` in `app.module.ts`.
7. Add Styles

Styles are seperated into multiple web components and can be imported as required. The below snippet should be included in the root of your application (e.g. `<head>` of `index.html`)

```html
<uui-global-variables-theme></uui-global-variables-theme>
<!-- contains all css variables used across all components. -->
<uui-default-theme></uui-default-theme>
<!-- contains colors for the default theme. -->
<uui-inverse-theme></uui-inverse-theme>
<!-- contains colors for the inverse theme. This is only required if you are using the inverse version of components -->
<uui-base-theme></uui-base-theme>
<!-- contains base styles for components which do not have a web component -->
```

By default components are styled using the default theme. To style elements using the inverse theme, create a wrapper element with the `data-theme` attribute set to `inverse`.

## Known Issues

Currently you may get a compilation error around types in `UUIRadioButton` and `UUICheckbox`:

```bash
Error: node_modules/@aonunited/web-components/dist/types/components.d.ts:775:43 - error TS2304: Cannot find name 'ChangeEventType'.

775         "onChanged"?: (event: CustomEvent<ChangeEventType>) => void;
                                              ~~~~~~~~~~~~~~~


Error: node_modules/@aonunited/web-components/dist/types/components.d.ts:789:42 - error TS2552: Cannot find name 'UUIRadioButton'. Did you mean 'UuiRadiobutton'?

789         "onToggle"?: (event: CustomEvent<UUIRadioButton>) => void;
                                             ~~~~~~~~~~~~~~


Error: node_modules/@aonunited/web-components/dist/types/components.d.ts:790:48 - error TS2552: Cannot find name 'UUIRadioButton'. Did you mean 'UuiRadiobutton'?

790         "onToggleChange"?: (event: CustomEvent<UUIRadioButton>) => void;
                                                   ~~~~~~~~~~~~~~

...

✖ Failed to compile.
```

There is a PR within United UI repo to fix this. But a hacky workaround is to open `node_modules/@aonunited/web-components/dist/types/components.d.ts` file and brute force `<any>` for the errors above. VSCode's `PROBLEMS` panes will direct you.
