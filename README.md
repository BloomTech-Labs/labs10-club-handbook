![logo](https://raw.githubusercontent.com/Lambda-School-Labs/labs10-club-handbook/master/client/src/logos/Cliquebook_combo.png)


# CliqueBook

CliqueBook is an easy to use document creator and club manager. Admins can create and edit their handbook and send it to their club members to read. Members are then able to sign and acknowledge that they've read the handbook and will ahere to the handbook guidelines.

- Wireframe: https://balsamiq.cloud/snv27r3/pyj9wis/r9DA7
- Front-End Deployment: https://clubhandbook.netlify.com/
- Back-End Deployment: https://club-handbook.herokuapp.com/
- Back-End Documentation: https://club-handbook.herokuapp.com/apidoc/

## Table of Contents
- [Team](#team)
- [Features](#features)
- [Front End Dependencies](#front-end)
- [Back End Dependencies](#back-end)


## Team

| Members         |      GitHub   |  LinkedIn |
|-----------------|-------------  |------|
| Addison Stavlo | https://github.com/Addison-Stavlo | https://www.linkedin.com/in/addison-stavlo |
| Arthur Bates, Jr. | https://github.com/AliasAJ    | https://www.linkedin.com/in/abates-prymecreative/ |
| Andrew Cengiz | https://github.com/turkworks | https://www.linkedin.com/in/andrewcengiz/ |
| Daren Larson | https://github.com/darenlarson  | https://www.linkedin.com/in/daren-larson |
| Tommy Huynh | https://github.com/tommaay | https://www.linkedin.com/in/tommy-huynh-ops/ |

## Features 

- Create a club handbook
- Add members and give them access to the handbook
- View who has viewed and signed the handbook
- Create, update and delete sections from the handbook
- Reorganize the sections by dragging and dropping them
- Members can access the handbook using a magic link
- Members can read and sign the handbook

<a name='front-end'/>
## Front-End Dependencies

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) - Routing Library
- [Styled Components](https://www.styled-components.com/) - Styling library for CSS in JS
- [React-Quill](https://quilljs.com/) - Rich text editor
- [React-Render-HTML](https://www.npmjs.com/package/react-render-html) - Renders a string of html syntax
- [Material UI](https://material-ui.com/) - UI library
- [React DND](https://www.npmjs.com/package/react-dnd) - Drag and drop for React
- [Redux](https://redux.js.org/) - State container

<a name='back-end'/>
## Back-End Dependencies

- [Node.js](https://nodejs.org/) - Back end JavaScript runtime
- [cors](https://www.npmjs.com/package/cors) - package for providing a Express middleware that can be used to enable CORS
- [expressjs](https://expressjs.com/) - Node.js framework
- [json web token](https://www.npmjs.com/package/jsonwebtoken) - Implements JSON web tokens
- [knex.js](https://knexjs.org/) - SQL query builder
- [sqlite3](https://www.sqlite.org/index.html) - Library that implements SQL database engine
- [Stripe](https://stripe.com/docs) - Library to implement Stripes billing functionality
- [Cloudinary](https://www.npmjs.com/package/cloudinary) - Library to upload and store images in the cloud
- [Multer](https://www.npmjs.com/package/multer) - Middleware for handling multipart/form-data, which is primarily used for uploading files
- [API Doc](https://www.npmjs.com/package/apidoc) - Plug in that helps create API documentation from source code comments
- [JWT Decode](https://www.npmjs.com/package/jwt-decode) - Library that helps decoding JWTs token which are Base64Url encoded
