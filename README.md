# Cine-UI

Cine-UI is a UI component library which has a set of basic ready-made UI components such as button,radio button,input fields,etc.They serve as building blocks for layouts.Later point, we are planning to use these ready-made components in order to implement tradedesk UI and further more in future.

**Docs (storybook) [here](https://cinemataztic.github.io/cine-ui/).**

# Technologies used

Headless UI, React, Tailwind CSS, Storybook

# Testing npm package locally

It is always recommended to test the package locally before publishing to the npm registry.

1. Build a tarball that can be installed locally in another project `npm run build && npm pack`
2. Open the project you wish to use for testing the package
3. run `npm install path/to/cine-ui/cine-ui-version.tgz` where cine-ui-version.tgz could e.g. be cine-ui-0.1.0.tgz
## Known issues
- New changes not applied after installing the tgz package locally: remove the node_modules folder in the test project and run step 3 again (`npm install path/to/cine-ui/cine-ui-version.tgz`).  
