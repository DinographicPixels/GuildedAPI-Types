# Guilded API Types
## Every type definitions for the [Guilded API](https://www.guilded.gg/docs/api/).

<p align="center">
  <img width=80% src="https://cdn.glitch.global/cb35789e-99c8-4015-8a8d-97537557bba9/guildedapitypes.png?v=1666622582141">
  <br>
  <a href="https://npmjs.com/package/guildedapi-types.ts"><img src="https://img.shields.io/npm/v/guildedapi-types.ts.svg?style=flat-square&color=informational"></a>
  <img src="https://img.shields.io/github/stars/DinographicPixels/GuildedAPI-Types?color=yellow&style=flat-square">
  <img src="https://img.shields.io/npm/dw/guildedapi-types.ts?color=red&style=flat-square">
</p>

# Installation
```bash
npm install guildedapi-types.ts
```

# Get started
To import the API Types, you need to choose the API version. E.g: `guildedapi-types.ts/v1`

You can import every types or some, E.g:
```typescript
import * as APITypes from 'guildedapi-types.ts/v1'
```

```typescript
import { APIGuild } from 'guildedapi-types.ts/v1'
```

To use most of types, you'll need Typescript.
Here's an example:
```typescript
const GuildCategory: APIGuildCategories = 'community';
```

# Who's using those types?
- TouchGuild (Guilded Library)

### When modifications are needed, feel free to make PRs.

# Links
- [GitHub](https://github.com/DinographicPixels/GuildedAPI-Types)
- [NPM](https://www.npmjs.com/package/guildedapi-types.ts)
- [Guilded API Documentation](https://www.guilded.gg/docs/api/)
