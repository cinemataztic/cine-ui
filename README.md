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

## Common issues

- When using cine-ui tailwind CSS components into an existing project which is also built using tailwind CSS, then there are possibilities of some issues with styling. In order to avoid them all, one need to do is to set `preflight` to false in
  the `corePlugins` section of tailwind.config.js file.

```js
module.exports = {
  corePlugins: {
    preflight: false,
  },
};
```

# Make the Cine UI components work with React hook form using “ref”/"Controller"

## Button,Disclosure

- It is not needed to make the above components to accept ref, because it does not produce any values to validate/submit.

## Input field(text), Checkbox

- These components can accept the ref prop , so that we can easily integrate these components with react-hook-form

```js
# Sample code

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input.component';

const Template = () => {
  const [text, setText] = useState('');
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onChangeHandle = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={type}
        name="Name"
        {...register('Name')}
        placeholder={placeholder}
        id={'1'}
        value={text}
        onChange={onChangeHandle}
        disabled={disabled}
      />
      <input type="submit" />
    </form>
  );
};

export const Base = Template.bind({});
```

## Radiobutton, Listbox(select), Inputdate picker

- These components are implemented using external UI library. These components doesn’t expose input’s ref, so it has to be implemented using a controller method, which takes care of the registration process.

```js
# Sample code

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ListboxComponent from './Listbox.component';

const Template = () => {
  const [value, setValue] = useState();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      selectedValue: '',
    },
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="selectedValue"
        control={control}
        render={({ field: { onChange } }) => (
          <ListboxComponent
            options={[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' },
              { value: '4', label: 'Option 4' },
              { value: '5', label: 'Option 5' },
            ]}
            value={value}
            onChange={(e) => {
              onChange(e);
              setValue(e);
            }}
            placeholder="Select option"
          />
        )}
      />
 <input type="submit" />
    </form>
  );
};

export const Listbox = Template.bind({});
```

## Slider

This component already has an internal ref to track the range value. So, when we pass ref from the external component, it is not returning the current value of the slider range. Due to that reason, when we integrate react-hook-form with this component ,one have to implement using Controller method.

# Theming

CineUI is styled using TailwindCSS. This means that the component library can easily be styled to other color themes by overriding the tailwind theme variables in the consumer project.
The easiest way to achieve this is to use TailwindCSS in the consumer project too and add the relevant variables to the tailwind.config.js file.
Available customization variables can be found [here](.config.js).

# Version release

## Steps to follow to release the new version of a package.

1. Check that you’re on the master/main branch and ensure that you’re not missing any commits from the git repository by running `git pull origin master/main` in the terminal.
2. Create a new branch for the release `git branch vX.X.X && git checkout vX.X.X`.
3. To update the version number in package.json and package-lock.json, on the command line in the package root directory, run the following command, replacing <update_type> with one of the [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) release types (patch, major, or minor): `npm version <update_type>`
4. The above step will automatically create a version commit and a new Git tag.
5. Previous tags can be seen by running `git tag`.
6. Push the new release branch and tag you made: `git push origin vX.X.X --tags`.

# Github release

1. On the Github page, click on `Releases` in this repo.
2. Click on `Tags`
3. Click on the [Draft new release](https://github.com/cinemataztic/cine-ui/releases/new) button. 
4. Click on the `Choose a tag` button and find the tag you created earlier (`vX.X.X` e.g. `v0.1.0`).
5. Click on `Generate release notes`. It’ll automatically generate notes with references to all pull requests between the current tag and latest release.
6. If you wish to allow discussions on this release, check the `Create a discussion for this release` box (recommended).
7. Finally, click on `Publish release` to publish the release of the new version.
