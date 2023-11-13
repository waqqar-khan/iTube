# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Initial Steps Required To Setup React Project


### Create your project

Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.

- i. npm create vite@latest my-project-name -- --template react
If it asks package name, you can press enter as by default your-project-name will be defined as package name. But if in case you wish to modify/update you can do it by simply writing some name of your own choice.

- ii. cd my-project-name

### Install Tailwind CSS

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
- iii. npm install -D tailwindcss postcss autoprefixer
- iv. npx tailwindcss init -p

### Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.
- tailwind.config.js file
 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

### Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
- index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

### Start your build process

Run your build process with npm run dev.
- v. npm run dev

## Start using Tailwind in your project!
### Start using Tailwind’s utility classes to style your content.


## I can guide you through the process of pushing a React project to GitHub step by step. Here are the general steps:


### Step 1

- Note: Make sure you have Git installed on your system and that you've configured it with your username and email. If not, you can set it up using the following commands:

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

Replace "Your Name" and "your.email@example.com" with your GitHub username and email address.

### Step 2: Create a new repository on GitHub

- Go to [Github](https://github.com/).
- Log in to your account.
- Click on the "+" sign in the top right corner and select "New repository."
- Fill in the repository name, description, and other details.
- Click "Create repository."

### Step 2: Initialize a Git repository in your React project

If you haven't already initialized a Git repository for your React project, you can do so by opening your project folder in the terminal and running the following commands:

- git init
- git add .
- git commit -m "Initial commit"

### Step 3: Link your local repository to the GitHub repository

Copy the URL of your GitHub repository (it should look like https://github.com/your-username/your-repo.git).

In your terminal, run the following command, replacing the URL with your repository URL:

- git remote add origin https://github.com/your-username/your-repo.git

### Step 4: Check the current branch Name (Main/Master) - (we need to follow this step because by default github main branch name is "main" and not "master")

In your terminal, run the following command:
- git branch

If it shows *main than need not do anything at this point, just follow next step.

But, if it shows *master than need to update the branch name with help of below command:

- git branch -M main

### Step 4: Push your code to GitHub

Now, you can push your local repository to GitHub:
- git push -u origin main

### Step 5: Verify on GitHub
- Go back to your GitHub repository in your web browser and refresh, and you should see your code there.

## That's it! Your React project is now on GitHub. Remember to push changes to GitHub whenever you make updates to your project.


## Redux Toolkit - for maintaining Global State
- npm i @reduxjs/toolkit
- npm i react-redux


### Redux Store Creation 
- Create a utils folder in store
- create a store file inside utils folder
   - configureStore api from @reduxjs/toolkit
- create a slice by first creating file appSlice inside utils folder
   - createSlice api from @reduxjs/toolkit
   - createSlice will contain name, initialState and reducers
   - we need to export default appSlice.reducer and action from reducer from appSlice.actions

```javascript
  import { createSlice } from "@reduxjs/toolkit";

  const appSlice = createSlice({
      name: "app",
      initialState: {
          isMenuOpen: true,
      },
      reducers: {
          toggleMenu: (state) => {
              state.isMenuOpen = !state.isMenuOpen;
          },
      },
  })

  export const {toggleMenu} = appSlice.actions;
  export default appSlice.reducer;
```

- import slice in the store
   - we will have reducer inside createSlice
   - reducer will contain app: appSlice

```javascript
  import { configureStore } from "@reduxjs/toolkit";
  import appSlice from "./appSlice";

  const store = configureStore({
      reducer: {
          app: appSlice,
      }
  })

  export default store;
```

- provide store to the app 
   - we will use a component provider which comes from react-redux package to provide store to the app
   - wrap app components within provider component and pass store to it and we need to import store from utils folder

```javascript
  import { Provider } from "react-redux";
  import Head from "./components/Head";
  import Body from "./components/Body";
  import store from "./utils/Store";

  function App() {
    return (
      <div>
        <Provider store={store}>
          <Head />
          <Body />
        </Provider>
      </div>
    );
  }

  export default App;
```

### Check whether Store is properly setup or not
 - We can check it with help of useSelector, or
 - We can check by going to our redux dev tools extension and check state

### General Steps Involve In Store Creation
 - We install redux toolkit
 - We install react redux
 - We created store
 - We created slice
 - We provided store to app
