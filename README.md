# WIP it
![79052-200](https://user-images.githubusercontent.com/6344422/37413543-933fc00e-27a7-11e8-9405-9b64d599fad4.png)

React component to help version control for WIP components using URI query strings

`yarn add wip-it`

## About
How do you build complex UI while merging small PRs without breaking the production app during continuous deployment? There are many strategies, for example:

- If you are building smaller components you can first build the UI for the component in a separate ecosystem such as Storybook, so merging PRs won't affect the app. Then when most of the work is completed you can plug the component into the app with all of its logic in the last few PRs. 

- If designing an entirely new page you can create a separate route for the new page, like "my.app/profile/newformtest" and then edit the route when you are ready to merge and deploy to production. 

These solutions work and should be encouraged, but WIP-it allows you to simply wrap the new component you are building and the current component in a `WIP` component. Then by adding a query string in the url such as "http://localhost:3000/?version=test1" you can render your current "Work in Progress" component with conditional rendering. Simply remove the query string to go back to the current component and remove the `WIP` logic when you are ready to delete the legacy component. WIP-it allows you to experiment with new UI components while keeping production and continuous deployment safe and flowing. WIP it! 


**NOTE: The query string must have the key `version`, the value can be anyting to your liking**

## API by example 

We set the query string in the URI to "test1" `http://localhost:3000/blahblah/?version=test1` and pass "test1" as a value to the `version` prop. `WIP` renders a function as children that passes the `isWip` boolean for you to conditionally render components. 

```js
import React from "react";
import WIP from "wip-it";

function App(props) {
  return (
  <WIP version="test1">
      {({ isWip }) =>
        isWip ? (
          <WorkInProgressComponent {...props} />
        ) : (
          <CurrentComponent {...props} />
        )
      }
    </WIP> 
  )

}

```

Alternate API for more flexibility is to not add the `version` prop and simply read the query string from the URI. This can add more flexibility when you have multiple WIPS. `WIP` also passes the `version` string value to be used for further conditional rendering and comparisons. 

```js

function App(props) {
  return (
  <WIP>
      {({ isWip, version }) => {
        if (version === "testy1")
          return <WorkInProgressComponent1 {...props} />;
        else if (version === "testy2")
          return <WorkInProgressComponent2 {...props} />;
        return <CurrentComponent {...props} />;
      }}
    </WIP>
  )

}

```

