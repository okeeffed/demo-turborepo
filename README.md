# Turborepo starter

This is an official Yarn v1 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo` command, and selected when choosing which package manager you wish to use with your monorepo (Yarn).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Blog post

```s
$ npx create-turbo@latest
# Follow prompts and select yarn for package manager
$ yarn run dev
# Runs the developer environment
```

### Adding a Heading component

Within `packages/ui/Heading.tsx`:

```tsx
import * as React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>;
}
```

Within `packages/ui/index.tsx`:

```tsx
import * as React from "react";
export * from "./Button";
export * from "./Heading";
```

Out-of-the-box, both `apps` that we have will have support to already support the capability of using the `Heading` component from the `ui` library without issue.

Within `apps/web/pages/index.tsx`:

```tsx
import { Button, Heading } from "ui";

export default function Web() {
  return (
    <div>
      <Heading>Web updated</Heading>
      <Button />
    </div>
  );
}
```

Within `apps/docs/pages/index.tsx`:

```tsx
import { Button, Heading } from "ui";

export default function Docs() {
  return (
    <div>
      <Heading>Docs updated</Heading>
      <Button />
    </div>
  );
}
```

Happy days! Next step will be looking at the ability to handle deployments.

### More useful links from playing around

- [Vercel Monorepos](https://vercel.com/docs/concepts/git/monorepos)
