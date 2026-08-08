import "server-only";
import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "mecozx_admin_session";

/**
 * The cookie value is an HMAC of a fixed string, keyed with a secret that
 * is only known to the server (ADMIN_SESSION_SECRET). It proves the holder
 * passed the password check without embedding the password itself in the
 * cookie, and it can't be forged without the secret.
 */
export function getAdminSessionToken(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set in .env.local");
  }
  return crypto.createHmac("sha256", secret).update("mecozx-admin").digest("hex");
}

export function checkAdminPassword(candidate: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    throw new Error("ADMIN_PASSWORD is not set in .env.local");
  }
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const expected = getAdminSessionToken();
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
