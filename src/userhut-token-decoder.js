const jwt = require("jsonwebtoken");

const prefix = "Bearer ";
const algorithm = "RS256";

export default function({ poolId, publicKey }) {
  if (!poolId) {
    throw new Error("Missing poolId");
  }
  if (!publicKey) {
    throw new Error("Missing publicKey");
  }
  function decode(token) {
    if (!token) {
      throw new Error("Missing token");
    }
    if (!token.startsWith(prefix)) {
      throw new Error("Malformed token");
    }
    const decoded = jwt.verify(
      token.substring(prefix.length, token.length),
      Buffer.from(publicKey, "base64").toString("ascii"),
      {
        algorithm
      }
    );
    if (decoded.poolId != poolId) {
      throw new Error("Invalid pool id");
    }
    return decoded;
  }
  return {
    decode
  };
}
