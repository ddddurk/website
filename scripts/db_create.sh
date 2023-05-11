#!/bin/sh

source .env

pscale db create $DATABASE_NAME

echo "\n>>> NEXT STEPS\n"

echo "Once PlanetScale has finished initializing $DATABASE_NAME, run:\n"

echo "pnpm db:branch\n"
