# Modulz Food App

## About Project

A small application that displays a list of foods. You can select which foods are delicious and/or healthy to eat using checkboxes. 
- When 'Delicious' is checked the food row is indented.
- When 'Healthy' is checked, the background color turns green.
- When both 'Delicious' and 'Healthy' are checked, the food row is indented and its background color turns green.

### Key Libraries Used

- React
- Styled Componets
- Styled System
- Nx

## Project Structure

```
+-- moddis/
+----- apps/
| +----- modulz-food-app/
| +------- src/ - Contains the main application files
| +---------- components/ - React components
| +---------- hooks/ - React Hooks
```

## Prerequisite

#### Install the Nx CLI

In order to run the Nx commands, install the Nx CLI globally.

Run `yarn global add nx`. For NPM, run `npm install -g nx`.

#### Adobe Nx

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Running the project

#### Development server

- Run `nx serve modulz-food-app` from the site root `moddis` to launch the application running the dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.