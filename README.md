# userhut-token-decoder-node

> Userhut token decoder for Node

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

## License

[MIT](http://opensource.org/licenses/MIT)

## Twitter

[Follow me on Twitter](https://twitter.com/KrolsBjorn)
