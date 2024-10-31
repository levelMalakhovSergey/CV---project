## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

---

## Скрипты

-   `npm run start` - Launch the frontend project on webpack dev server
-   `npm run start:vite` - Launch the frontend project on vite
-   `npm run start:dev` - Launch the frontend project on webpack dev server + backend
-   `npm run start:dev:vite` - Launch the frontend project on vite + backend
-   `npm run start:dev:server` - Launch the backend server
-   `npm run build:prod` - Build in prod mode
-   `npm run build:dev` - Build in dev mode (not minimized)
-   `npm run lint:ts` - Check ts files with linter
-   `npm run lint:ts:fix` - Fix ts files with linter
-   `npm run lint:scss` - Check scss files with style linter
-   `npm run lint:scss:fix` - Fix scss files with style linter
-   `npm run test:unit` - Run unit tests with jest
-   `npm run test:ui` - Run screenshot tests with loki
-   `npm run test:ui:ok` - Confirm new screenshots
-   `npm run test:ui:ci` - Run screenshot tests in CI
-   `npm run test:ui:report` - Generate a full report for screenshot tests
-   `npm run test:ui:json` - Generate a JSON report for screenshot tests
-   `npm run test:ui:html` - Generate an HTML report for screenshot tests
-   `npm run storybook` - Run Storybook
-   `npm run storybook:build` - Build Storybook
-   `npm run prepare` - Pre-commit hooks
-   `npm run generate:slice` -Script for generating FSD slices

---

## Project Architecture

The project is written according to the Feature Sliced Design methodology

Link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for working with translations. Translation files are stored in public/locales.

For comfortable work, it is recommended to install a plugin for webstorm/vscode

documentation i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

В проекте используются 4 вида тестов:

1. Regular unit tests with jest - `npm run test:unit`
2. Component tests with React Testing Library -`npm run test:unit`
3. Screenshot testing with loki `npm run test:ui`
4. End-to-end testing with Cypress `npm run test:e2e`

More about tests- [документация тестирование](/docs/tests.md)

---

## Linting

The project uses eslint to check TypeScript code and stylelint to check style files.

Also, for strict control of major architectural principles, a custom eslint plugin eslint-plugin-ulbi-tv-plugin is used, which contains 3 rules

1. path-checker - prohibits the use of absolute imports within the same module
2. layer-imports - checks the correctness of using layers from the FSD perspective (for example, widgets cannot be used in features and entities)
3. public-api-imports - allows importing from other modules only from the public API. Has auto fix

##### Running linters

-   `npm run lint:ts` - Check ts files with linter
-   `npm run lint:ts:fix` - Fix ts files with linter
-   `npm run lint:scss` - Check scss files with style linter
-   `npm run lint:scss:fix` - Fix scss files with style linter

---

## Storybook

For each component in the project, story cases are described. Server requests are mocked using storybook-addon-mock.

The file with story cases is created next to the component with the extension .stories.tsx

You can run Storybook with the command:

-   `npm run storybook`

More abou [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

## Project Configuration

For development, the project contains 2 configs:

1. Webpack - ./config/build
2. vite - vite.config.ts

Both builders are adapted for the main features of the application.

All configuration is stored in /config

-   /config/babel - babel
-   /config/build - webpack configuration
-   /config/jest - test environment configuration
-   /config/storybook - Storybook configuration

Various `scripts` for refactoring, simplifying code writing, generating reports, etc. are located in the scripts folder.

---

## CI Pipeline and Pre-commit Hooks

The GitHub Actions configuration is located in /.github/workflows. In CI, all types of tests, project and Storybook builds, linting are run.

In pre-commit hooks, the project is checked with linters, the config is in /.husky

---

### Working with Data

Data interaction is done using Redux Toolkit. Reusable entities should be normalized using EntityAdapter whenever possible.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (to avoid pulling them into the main bundle),
[DynamicModuleLoader] is used (/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

### Working with Feature Flags

The use of feature flags is allowed only with the toggleFeatures helper

an object with options is passed to it

{ name: feature flag name, on: function that will run after enabling the feature of: function that will run after disabling the feature }

To automatically remove a feature, use the remove-feature.ts script, which takes 2 arguments

1. Name of the feature flag to be removed
2. State (on\off)

---

## Entities

-   [Article](/src/entities/Article)
-   [Comment](/src/entities/Comment)
-   [Counter](/src/entities/Counter)
-   [Country](/src/entities/Country)
-   [Currency](/src/entities/Currency)
-   [Notification](/src/entities/Notification)
-   [Profile](/src/entities/Profile)
-   [Rating](/src/entities/Rating)
-   [User](/src/entities/User)

## features

-   [addCommentForm](/src/features/addCommentForm)
-   [articleEditForm](/src/features/articleEditForm)
-   [articleRating](/src/features/articleRating)
-   [articleRecommendationsList](/src/features/articleRecommendationsList)
-   [AuthByUsername](/src/features/AuthByUsername)
-   [avatarDropdown](/src/features/avatarDropdown)
-   [editableProfileCard](/src/features/editableProfileCard)
-   [LangSwitcher](/src/features/LangSwitcher)
-   [notificationButton](/src/features/notificationButton)
-   [profileRating](/src/features/profileRating)
-   [ThemeSwitcher](/src/features/ThemeSwitcher)
-   [UI](/src/features/UI)
