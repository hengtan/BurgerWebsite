 # Burger Website Project

This project, named **Burger Website**, is a web application potentially related to a burger restaurant or a similar concept. 

## General Information

- **Project Name**: The project is named "Burger Website".
- **Version**: The current version of the project is 1.0.0.
- **Main Entry Point**: The main entry point of the application is `index.js`.

## Scripts

The project has a script named `watch` which uses `npx` to run `tailwindcss` on an input CSS file (`./src/input.css`), outputting the result to `./dist/output.css`. The `--watch` flag means that this process will rerun any time `./src/input.css` changes, allowing for live updates during development.

```json
"scripts": {
  "watch": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
}
```

## Dependencies

The project has a development dependency on `tailwindcss`, a utility-first CSS framework for rapidly building custom user interfaces. The version used is 3.4.3 or higher.

```json
"devDependencies": {
  "tailwindcss": "^3.4.3"
}
```

## Keywords

The keywords field is currently empty. Keywords help people discover your project on npm. You may want to add keywords that describe your project, such as: `web`, `burger`, `restaurant`, `tailwindcss`.
