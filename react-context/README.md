# What's this about?
After reading [Nadia's blog post of react context](https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context) i wanted to try out the 3 scenarios put forth in the article.\
The 3 scenarios are:
1. Form only using state causes unnecessary rerenders
2. Form only using 1 react context still causes some unnecessary rerenders
3. Form using multiple react contexts and reducers can fix the rerender issue

Examples:
1. State only - every state change causes a rerender on the form
2. Mega context - every context state change causes consumers of context mutators to re-render
    - This is because mutators depend on state, causing the mutator functions to change everytime state changes. More info in "Split context by mutators caveat".
3. Repeat context caveat - don't use the same context provider more than once on a given page. Only the "closest" context values will be read, which will cause other consumers to become stale (no re-render).
4. Split context by mutators caveat - think about the relationship between mutators and their backing state. If the mutator is stored in context and is backed by local component state, it will cause re-renders on every mutation of that state. This will cause components using the context mutation to re-render due to mutation function update.
5. Split context - decouple the local component state and it's mutators by using a reducer inside the context to dispatch state changes. This reduces unneccessary re-renders as mutators are constants and state property changes only trigger re-renders where required.

The learnings:
1. When sharing state downwards (child components) then local component state is the simplest. When deep prop drilling becomes an issue, context can help alleviate this issue.
2. When sharing state upwards (parent components) or sideways (sibling components) you cannot use local component state. Instead use react contexts to declare state that spans any one component.
3. Use react contexts when context boundaries do not overlap ie. data does not need to be shared across contexts. Otherwise you will need to manage/synchronise data across contexts and potentially cause a bunch of re-renders where you don't intend to.
4. Model your context state based off the consumption of context mutators. If you store everything in a single piece of state as an object, and mutators will update a single property of the object, you can cause a lot of re-renders to consumers.
5. Use react reducers in react context when sharing state. This will improve the performance of your react app by:
    - decoupling state and state mutators
    - decoupling each property in the state object, allowing for targeted re-rendering

# How am i tracking renders?
[Guide to checking renders](https://jsramblings.com/how-to-check-if-your-component-rerendered-and-why/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
