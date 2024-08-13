class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
//--------------------------
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  static blacklistedEmails = [];
  static blacklist(email){
    if(!(Admin.blacklisedEmails.contains(email)))
       Admin.blacklistedEmails.push(email);
  }
  static isBlacklisted(email){
    return Admin.blacklistedEmails.contains(email);
  }
  constructor(params) {
    super(params.email);
    this.access = params.access;
  }
}
//-------------------------
const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
