/**
 * An array of routes that are public
 * These routes don't need auth
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that are used for  auth
 * These routes will redirect if logged in
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * An array of routes that are used for admin
 * These routes will redirect if not admin
 * @type {string[]}
 */
export const adminRoutePrefix = "/admin";

/**
 * The prefix for API auth routes
 * This prefix is used for auth
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default path for redirect after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
