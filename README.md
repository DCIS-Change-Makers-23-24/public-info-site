# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### ReadMe/GH Commit Tags:

- [ADD] - Add a new feature or component
  - Example: [ADD] Add login functionality to the website.

- [RMV] - Remove something
  - Example: [RMV] Remove unused code from the repository.

- [UPT] - Update something, such as a color scheme or content
  - Example: [UPT] Update the website's header with a new logo.

- [CHG] - Change something, distinct from an update
  - Example: [CHG] Change the navigation menu layout from horizontal to vertical.

- [GPT-ADD] - Additions made by GPT-based language model (GPT-3.5)
  - Example: [GPT-ADD] Add additional information about the project's requirements.

- [FIX] - Fix an existing issue or bug
  - Example: [FIX] Fix the form validation error that prevents users from submitting the form.

- [SK] - Skill issue, indicating a temporary workaround or duct-taped fix
  - Example: [SK] Temporary fix for the database connection issue until a permanent solution is implemented.
