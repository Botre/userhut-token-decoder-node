# userhut-token-decoder-node

> Userhut token decoder for Node

## Installation

### NPM

```bash
npm install --save userhut-token-decoder jsonwebtoken
```

[npm package link](https://www.npmjs.com/package/userhut-token-decoder)

## Usage

### Initialize

```javascript
const TokenDecoder = require("userhut-token-decoder");
const tokenDecoder = new TokenDecoder({
  poolId: "your-pool-id",
  publicKey: "your-public-key"
});
```

### Decode token

```javascript
const token = ctx.request.headers["authorization"];
const decoded = tokenDecoder.decode(token);
```

## Powered by

- Babel 7
- Webpack 4

## License

[MIT](http://opensource.org/licenses/MIT)

## Twitter

[Follow me on Twitter](https://twitter.com/KrolsBjorn)
