# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Deploying to GitHub Pages

The `Deploy Angular site` workflow publishes the Angular production build from
`dist/portfolio/browser` to the root of GitHub Pages. It runs on pushes to
`master`. Once the workflow is on the default branch, it can also be started
manually from the Actions tab using another branch. It preserves the
`CNAME` stored in `angular/public` and adds a `404.html` fallback so direct
Angular routes can load.

Before the first deployment, open the repository's **Settings → Pages** and set
the build and deployment source to **GitHub Actions**. After that, merge the
Angular changes into `master` to replace the live static homepage. The original
static files remain in the repository but are not included in the deployed
site.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
