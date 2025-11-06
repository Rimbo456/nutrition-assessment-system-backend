const { db } = require("../config/firebase");
const UserModel = require("../model/user.model");

class UserService {
  static async createUser(data) {
    const user = new UserModel(data);
    user.validate();

    const docRef = await db.collection("users").add({
      name: user.name,
      email: user.email,
    });

    return { id: docRef.id, ...data };
  }

  static async getUserById(id) {
    const doc = await db.collection("users").doc(id).get();
    if (!doc.exists) {
      throw new Error("User not found");
    }
    return { id: doc.id, ...doc.data() };
  }
}

module.exports = UserService;
