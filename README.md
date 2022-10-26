# Girls Code Club Website

This is the codebase for Girls Code Club Lancaster, at the Lancaster Science Factory. Below are instructions detailing how to edit and build this project for production.

## Setup

1. Pull down the project from Github.
2. Install the lastest version of NodeJS / npm (if you don't already have it).
3. Run `npm install`.

### Installing NodeJS
You will likely want to install NodeJS was well as `n`, which is a NodeJS package manager. This is particularly useful if GCC is not the only codebase on your machine.

Install NodeJS:
```bash
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n lts
```

Now Node and `npm` are available. Install `n`:
```bash
npm install -g n
```

[[More on 'n' as a package manager.]](https://www.npmjs.com/package/n)

## Running the Project Locally

```sh
npm run dev
```

After running, it should be available at [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your browser.

## Deploy
This repo uses [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) to host and deploy our code to a public url. The script below is configured to build the project, and deploy _just_ the `dist` folder to branch `gh-pages`. Github is configured to show anything in the root of that branch (i.e. our build).

```sh
npm run deploy
```

## Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
