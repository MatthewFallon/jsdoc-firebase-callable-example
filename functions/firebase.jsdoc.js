/**
 * A local firebase namespace for use with linking to external documentation.
 *
 * @namespace Firebase
 */

/**
 * The interface for metadata for the API as passed to the handler.
 * 
 * @see {@link https://firebase.google.com/docs/reference/functions/common_providers_https.callablecontext?hl=en Firebase Docs CallableContext}
 * @typedef {import("firebase-functions").https.CallableContext} Firebase.CallableContext
 * @memberof Firebase
 */

/**
 * Interface representing a user.
 * @see {@link https://firebase.google.com/docs/reference/admin/node/firebase-admin.auth.userrecord?hl=en Firebase Docs UserRecord}
 * @typedef {import("firebase-functions").auth.UserRecord} Firebase.UserRecord
 * @memberOf Firebase
 */

/**
 * The context in which an event occurred.
 *
 * An EventContext describes:
 *
 * - The time an event occurred.
 * - A unique identifier of the event.
 * - The resource on which the event occurred, if applicable.
 * - Authorization of the request that triggered the event, if applicable and available.
 * @see {@link https://firebase.google.com/docs/reference/functions/cloud_functions.eventcontext?hl=en Firebase Docs EventContext}
 * @typedef {import("firebase-functions").EventContext} Firebase.EventContext
 * @memberOf Firebase
 */

/**
 * A WriteResult wraps the write time set by the Firestore servers on sets(), updates(), and creates().
 * @see {@link https://googleapis.dev/nodejs/firestore/latest/WriteResult.html Firestore Docs WriteResult}
 * @typedef {FirebaseFirestore.WriteResult} Firebase.WriteResult
 * @memberOf Firebase
 */

/**
 * An explicit error that can be thrown from a handler to send an error to the client that called the function.
 *
 * See Links for handling of errors on client.
 * @see {@link https://firebase.google.com/docs/reference/functions/common_providers_https.httpserror?hl=en Firebase Docs HttpsError}
 * @see {@link https://firebase.google.com/docs/functions/callable?hl=en#handle_errors_on_the_client Handling Errors on the Client Side}
 * @typedef {import("firebase-functions").https.HttpsError} Firebase.HttpsError
 * @memberOf Firebase
 */

/**
 * A Timestamp represents a point in time independent of any time zone or calendar,
 * represented as seconds and fractions of seconds at nanosecond resolution in UTC Epoch time.
 * It is encoded using the Proleptic Gregorian Calendar which extends the Gregorian calendar backwards to year one.
 * It is encoded assuming all minutes are 60 seconds long, i.e. leap seconds are “smeared” so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z.
 *
 * @see {@link https://googleapis.dev/nodejs/firestore/latest/Timestamp.html Firestore Docs Timestamp}
 * @typedef {FirebaseFirestore.Timestamp} Firebase.Timestamp
 * @memberOf Firebase
 */
