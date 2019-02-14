define({ "api": [
  {
    "type": "get",
    "url": "/api/clubs",
    "title": "Request List of Clubs",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of Club objects.</p>"
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
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "single",
            "description": "<p>club object.</p>"
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
    "type": "get",
    "url": "/api/clubs/:id/sections",
    "title": "Request Sections of a Club",
    "group": "clubs",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of section objects.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/routes/clubsRoute.js",
    "groupTitle": "clubs",
    "name": "GetApiClubsIdSections"
  },
  {
    "type": "get",
    "url": "/api/users/register",
    "title": "Add a User",
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
    "type": "post",
    "url": "/api/users/register",
    "title": "Add a User",
    "group": "users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Success",
            "description": "<p>message and user ID.</p>"
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
