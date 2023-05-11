# Database

## Env

Use the `.env.example` file to create a `.env` file.

## PlanetScale

[PlanetScale](https://planetscale.com) is a MySQL serverless platform.

With a `.env` file, a PlanetScale account, and the [PlanetScale CLI installed](https://github.com/planetscale/cli#installation), run the following commands to configure a PlanetScale database for local development:

```bash
pnpm db:create
```

```bash
pnpm db:branch
```

These will create a `.env.DATABASE_NAME` PlanetScale database and a `.env.DATABASE_BRANCH` branch.

## Prisma

[Prisma](https://www.prisma.io) is a Node.js and TypeScript ORM.

To sync PlanetScale with Prisma, run the following command:

```bash
pnpm db:push
```

This will generate Prisma types and push `prisma/schema.prisma` models to the `.env.DATABASE_BRANCH` branch.
