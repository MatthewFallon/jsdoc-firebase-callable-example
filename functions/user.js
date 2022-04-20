const functions = require("firebase-functions")
const admin = require("firebase-admin")

const db = admin.firestore()

/**
 * Creates user metadata in firestore.
 * @param {Firebase.UserRecord} user 
 * @param {Firebase.EventContext} context 
 * 
 * @memberof Triggers
 */
function onCreate(user, context) {
    return db.collection("users").doc(user.uid).set({
        id: user.uid,
        name: user.displayName || "",
        email: user.email || ""
    })
}
exports.onCreate = functions.auth.user().onCreate(onCreate)

/**
 * Read data for a given uid
 * @param {object} data 
 * @param {string} data.uid the user's ID to grab
 * @param {Firebase.CallableContext} context 
 * @returns {Callables.UserData}
 * @memberof Callables
 */
function read(data, context) {
    if (context.auth.uid === data.uid) {
        return db.collection("users").doc(data.uid).get()
        .then(val => {
            return val.data()
        })
    }
}
exports.read = functions.https.onCall(read)

/**
 * Updates the given users userdoc.
 * @param {Callables.UserUpdateData} data 
 * @param {Firebase.CallableContext} context 
 * @returns {Firebase.WriteResult}
 * @memberof Callables
 */
function update(data, context) {
    db.runTransaction(t => {
        let ref = db.collection("users").doc(context.auth.uid)
        t.get(ref)
        .then(snap => {
            return snap.data()
        })
        .then(original => {
            let update = {
                name: data.name || original.name,
                email: data.email || original.email
            }
            t.update(ref, update)
        })
    })
}

/**
 * Cleans up user metadata on delete.
 * @param {Firebase.UserRecord} user 
 * @param {Firebase.EventContext} context 
 * 
 * @memberof Triggers
 */
function onDelete(user, context) {
    return db.collection("users").doc(user.uid).delete()
}
exports.onDelete = functions.auth.user().onDelete(onDelete)

