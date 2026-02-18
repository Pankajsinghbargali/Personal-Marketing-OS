import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET ?? "dev-secret";

export function signJwt(payload: object) {
  return jwt.sign(payload, jwtSecret, { expiresIn: "7d" });
}

export function verifyJwt(token: string) {
  return jwt.verify(token, jwtSecret);
}
