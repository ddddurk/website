#!/bin/sh

source .env

pscale branch create $DATABASE_NAME $DATABASE_BRANCH

echo "\n>>> NEXT STEPS\n"

echo "Once PlanetScale has finished initializing $DATABASE_BRANCH, run:\n"

echo "pnpm db:push\n"
