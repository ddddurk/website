#!/bin/sh

source .env

pscale connect $DATABASE_NAME $DATABASE_BRANCH --port $DATABASE_PORT
