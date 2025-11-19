// SIGNUP Handler (for Admin use or test accounts)
async function registerUser(email, password, role, extraData = {}) {
  try {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const uid = userCred.user.uid;

    await setDoc(doc(db, "users", uid), {
      email,
      role,
      ...extraData,
    });

    alert("User registered as " + role);
  } catch (err) {
    alert(err.message);
  }
}
