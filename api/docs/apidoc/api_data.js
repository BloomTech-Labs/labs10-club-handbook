define({ "api": [
  {
    "type": "delete",
    "url": "/api/clubs/:id",
    "title": "Delete a Club",
    "group": "clubs",
    "description": "<p>only owner of club can access</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of deleted club</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "DeleteApiClubsId"
  },
  {
    "type": "get",
    "url": "/api/clubs",
    "title": "Request List of Clubs",
    "group": "clubs",
    "deprecated": {
      "content": "[not needed, not protected, TODO remove]"
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Clubs",
            "description": "<p>List of Club objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "GetApiClubs"
  },
  {
    "type": "get",
    "url": "/api/clubs/:id",
    "title": "Request Club by ID",
    "group": "clubs",
    "description": "<p>token holder must be member of club</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Club",
            "description": "<p>single club object.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "GetApiClubsId"
  },
  {
    "type": "patch",
    "url": "/api/clubs/:id",
    "title": "Update a Club",
    "group": "clubs",
    "description": "<p>only owner of club can access</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "club",
            "description": "<p>club object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "PatchApiClubsId"
  },
  {
    "type": "post",
    "url": "/api/clubs",
    "title": "Create a new Club",
    "group": "clubs",
    "description": "<p>token owner must not be part of a club</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>add to body.name (REQ)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "club",
            "description": "<p>club object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "PostApiClubs"
  },
  {
    "type": "get",
    "url": "/api/images/upload",
    "title": "Post an image",
    "group": "images",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Returns",
            "description": "<p>url to image</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/imagesRoute.js",
    "groupTitle": "images",
    "name": "GetApiImagesUpload"
  },
  {
    "type": "delete",
    "url": "/api/users/addMember/:id",
    "title": "Delete a Club Member",
    "group": "members",
    "description": "<p>member must belong to the token users club</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message and user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of deleted member</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "members",
    "name": "DeleteApiUsersAddmemberId"
  },
  {
    "type": "get",
    "url": "/api/clubs/:id/members",
    "title": "get member list of a club",
    "group": "members",
    "description": "<p>only owner of club can access</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "members",
            "description": "<p>Array of members objects</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "members",
    "name": "GetApiClubsIdMembers"
  },
  {
    "type": "patch",
    "url": "/api/users/addMember/:id",
    "title": "Edit a Club Member",
    "group": "members",
    "description": "<p>member must belong to the token users club</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message and user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>updated member object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "members",
    "name": "PatchApiUsersAddmemberId"
  },
  {
    "type": "post",
    "url": "/api/clubs/:id/checkMember",
    "title": "verify member by email",
    "group": "members",
    "description": "<p>no token req, returns boolean</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>add to body.email (REQ)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>confirmation message</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isMember",
            "description": "<p>true or false</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "members",
    "name": "PostApiClubsIdCheckmember"
  },
  {
    "type": "post",
    "url": "/api/users/addMember",
    "title": "Add a Club Member",
    "group": "members",
    "description": "<p>user on token must own a club to add members</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>attach to body.email (req)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message and user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>created member object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "members",
    "name": "PostApiUsersAddmember"
  },
  {
    "type": "delete",
    "url": "/api/clubs/:id/sections",
    "title": "Delete ALL sections of a club",
    "group": "sections",
    "description": "<p>only owner of club can access</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "confirmation",
            "description": "<p>message</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "DeleteApiClubsIdSections"
  },
  {
    "type": "delete",
    "url": "/api/clubs/:id/sections/:sectionId",
    "title": "Delete a section by sectionId",
    "group": "sections",
    "description": "<p>only owner of club can access</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of deleted section</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "DeleteApiClubsIdSectionsSectionid"
  },
  {
    "type": "get",
    "url": "/api/clubs/:id/sections",
    "title": "Request Sections of a Club",
    "group": "sections",
    "description": "<p>token holder must be member of club</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "sections",
            "description": "<p>List of section objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "GetApiClubsIdSections"
  },
  {
    "type": "patch",
    "url": "/api/clubs/:id/sections/:sectionId",
    "title": "Update info of a Section",
    "group": "sections",
    "description": "<p>only owner of club can access</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "section",
            "description": "<p>section object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "PatchApiClubsIdSectionsSectionid"
  },
  {
    "type": "post",
    "url": "/api/clubs/:id/sections",
    "title": "Add Sections to a Club",
    "group": "sections",
    "description": "<p>only owner of club can access</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "section",
            "description": "<p>section object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "sections",
    "name": "PostApiClubsIdSections"
  },
  {
    "type": "get",
    "url": "/api/settings",
    "title": "Get list of Settings",
    "group": "settings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "lists",
            "description": "<p>of colors, fonts, and img_placements</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/settingsRoute.js",
    "groupTitle": "settings",
    "name": "GetApiSettings"
  },
  {
    "type": "delete",
    "url": "/api/users/:id",
    "title": "Delete User by ID",
    "group": "users",
    "description": "<p>can only delete user on token</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message and user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of deleted user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "DeleteApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/:id",
    "title": "Get User by ID",
    "group": "users",
    "description": "<p>can only acces info of user on token</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>user object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "GetApiUsersId"
  },
  {
    "type": "get",
    "url": "/api/users/register",
    "title": "Get a List of Users",
    "deprecated": {
      "content": "[not needed, not protected, TODO remove]"
    },
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of user objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "GetApiUsersRegister"
  },
  {
    "type": "patch",
    "url": "/api/users/:id",
    "title": "Update User by ID",
    "group": "users",
    "description": "<p>can only change info of user on token</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "authorization",
            "description": "<p>access token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message and user object.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>updated user object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "PatchApiUsersId"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Add a User (Auth0)",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokens",
            "description": "<p>both idToken and accessToken send in body</p>"
          }
        ]
      }
    },
    "description": "<p>this is intended for club owners registering and signing in throught auth0, this is not intended for adding members or magic-link login</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "n/a",
            "description": "<p>'welcome' or 'welcome back'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "PostApiUsersRegister"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Email/Magic Link Login",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tokens",
            "description": "<p>both idToken and accessToken send in body</p>"
          }
        ]
      }
    },
    "description": "<p>this is intended for magic-link login, their email and club_id have previously been added by club owner through /users/addMember endpoint.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "text",
            "optional": false,
            "field": "n/a",
            "description": "<p>'welcome' or 'welcome back'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/usersRoute.js",
    "groupTitle": "users",
    "name": "PostApiUsersRegister"
  }
] });
