# userhut-token-decoder-node

Userhut token decoder for Node

## Installation

### NPM

```bash
npm install --save userhut-token-decoder jsonwebtoken
```

[npm package link](https://www.npmjs.com/package/userhut-token-decoder)

## Usage

```javascript
// Initialize library
const TokenDecoder = require("userhut-token-decoder");
const tokenDecoder = new TokenDecoder({
  poolId: "your-pool-id",
  publicKey: "your-public-key"
});

// Decode token
const token = ctx.request.headers["authorization"];
const decoded = tokenDecoder.decode(token);
```

### Koa middleware

```javascript
const TokenDecoder = require("userhut-token-decoder");
const tokenDecoder = new TokenDecoder({
  poolId: process.env.APP_USERHUT_POOL_ID,
  publicKey: process.env.APP_USERHUT_PUBLIC_KEY_B64
});

module.exports = async (ctx, next) => {
  const token = ctx.request.headers["authorization"];
  const user = tokenDecoder.decode(token);
  ctx.state.user = user;
  return next();
};
```