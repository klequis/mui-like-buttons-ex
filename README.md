# Material Design '-like' Buttons

<img src="https://github.com/klequis/mui-like-buttons-ex/blob/master/text-button.gif" />

## Overview of how they were created
- A link the Roboto font is added to index.html
- The Material UI button that will be replicated is viewed in Firefox
- In the Firefox debugging tools, when viewing the computed CSS, you can right click and choose 'select all' and then copy the properties and values'
  - make sure browser styles checkbox is not checked
  - these styles were used as a base to avoide a lot typing
- Convert copied CSS to JSS
  - there is a nice [online tool](https://staxmanade.com/CssToReact/) to do this
- Tweek the JSS as needed using an actual MUI button as a guide

## Reference
- [Material UI](https://material-ui.com/)
- [React Ink](https://www.npmjs.com/package/react-ink)
