// This file is for central groupings handled by jsdoc only

/**
 * Callable functions for use by the frontend.
 *
 * @namespace Callables
 */

/**
 * Triggered functions that run automatically from our backend.
 *
 * @namespace Triggers
 */

// Below are a list of types used throughout this namespace.
/**
 * An object representing the User documents from firestore.
 * @typedef {Object} Callables.UserData
 * @property {string} id - The ID of the user.
 * @property {string} name - The displayname of the user.
 * @property {string} email - the email of the user.
 * @memberOf Callables
 */

/**
 * An object for updating user profiles.
 * @typedef {Object} Callables.UserUpdateData
 * @property {string} [name] - The displayname of the user.
 * @property {string} [email] - the email of the user.
 * @memberof Callables
 */