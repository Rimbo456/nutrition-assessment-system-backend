class UserModel {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
  }

  validate() {
    if (!this.email || !this.email.includes("@")) {
      throw new Error("Invalid email address");
    }
    if (!this.name) {
      throw new Error("Name is required");
    }
    return true;
  }
}

module.exports = UserModel;
