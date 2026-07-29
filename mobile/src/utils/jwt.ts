export interface JwtPayload {
  exp?: number;
  iat?: number;
  id?: number;
  email?: string;
  fullName?: string;
  [key: string]: any;
}

export function decodeJwt(token: string): JwtPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      return null;
    }
    const payload = parts[1];
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(
      base64.length + ((4 - (base64.length % 4)) % 4),
      "="
    );
    const jsonPayload = decodeURIComponent(
      atob(padded)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

export function isTokenExpired(token: string | null): boolean {
  if (!token) return true;
  const decoded = decodeJwt(token);
  if (!decoded) return true;

  if (typeof decoded.exp === "number") {
    const currentTime = Math.floor(Date.now() / 1000) - 10;
    return decoded.exp < currentTime;
  }

  return false;
}

export function generateMockJwt(
  payload: Record<string, any>,
  expiresInSeconds: number = 7 * 24 * 3600
): string {
  const header = { alg: "HS256", typ: "JWT" };
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + expiresInSeconds;

  const fullPayload = {
    ...payload,
    iat,
    exp,
  };

  const encodeBase64Url = (obj: Record<string, any>) => {
    const json = JSON.stringify(obj);
    const base64 = btoa(unescape(encodeURIComponent(json)));
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  };

  const encodedHeader = encodeBase64Url(header);
  const encodedPayload = encodeBase64Url(fullPayload);
  const mockSignature = "mock_signature_hash_sec";

  return `${encodedHeader}.${encodedPayload}.${mockSignature}`;
}
