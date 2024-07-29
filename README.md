# Running React Artifacts Locally

1. Set up a new React project:
   If you don't have a React project set up already, create one using Create React App:

   ```
   npx create-react-app new-project
   cd new-project
   ```

2. Install dependencies:
   Install the required libraries:

   ```
   npm install lucide-react
   ```

3. Replace the contents of `src/App.js`:
   Copy the entire code from the artifact and paste it into `src/App.js`, replacing its current contents.

4. Update `src/index.js`:
   Make sure `src/index.js` is importing App correctly:

   ```javascript
   import React from "react";
   import ReactDOM from "react-dom/client";
   import "./index.css";
   import App from "./App"; // Update the App with the correct React component name

   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(
     <React.StrictMode>
       <App /> // Update the App with the correct React component name
     </React.StrictMode>
   );
   ```

5. Add Tailwind CSS:
   This project uses Tailwind CSS. To set it up:

   a. Install Tailwind and its dependencies:

   ```
   npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
   ```

   b. Generate Tailwind config files:

   ```
   npx tailwindcss init -p
   ```

   c. Update the tailwind.config.js file:

   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   d. Replace the contents of src/index.css with:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Run the development server:
   Start the development server with:

   ```
   npm start
   ```

7. View the project:
   Open your browser and go to http://localhost:3000. You should see the project.

Additional notes:

- Make sure your React version is 16.8.0 or higher to support hooks.
- If you encounter any issues with the Lucide icons, you might need to install them separately:
  ```
  npm install lucide-react
  ```

## Bonus: Deploying to GitHub Pages

To deploy your project to GitHub Pages:

1. Install gh-pages:

   ```
   npm install gh-pages
   ```

2. Add homepage to `package.json`. Add the following line to your `package.json` file:

   ```json
   "homepage": "https://your-github-username.github.io/your-repo-name",
   ```

   Replace your-github-username with your GitHub username and your-repo-name with the name of your repository.

3. Update the scripts in `package.json`:

   ```json
    "scripts": {
      // other scripts
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
   ```

4. Deploy the project. Run the following command to deploy your project to GitHub Pages:

   ```
   npm run deploy
   ```

5. Access your project. You can now access your project at https://your-github-username.github.io/your-repo-name.
6. If you encounter any issues with the deployment, make sure you have committed all your changes to the repository.
