## command to run apidoc - 
apidoc -i api/route -o api/docs

## commandline for Heroku DB stuff
heroku run -a club-handbook knex migrate:latest --env production
heroku run -a club-handbook knex seed:run --env production
