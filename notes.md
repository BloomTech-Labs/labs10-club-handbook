## command to run apidoc - 
apidoc -i api/routes -o api/docs/apidoc
server.use(express.static('api/docs'))

## commandline for Heroku DB stuff
heroku run -a club-handbook knex migrate:latest --env production
heroku run -a club-handbook knex seed:run --env production
