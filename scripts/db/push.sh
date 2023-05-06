#!/bin/sh

source .env

echo "Waiting for PlanetScale before pushing..."

sleep 5

prisma db push

echo "\n>>> SUCCESS\n"

echo "Successfuly pushed Prisma schema to $DATABASE_BRANCH branch, you may safely type Ctrl+C.\n"
