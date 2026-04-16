import bcrypt from "bcryptjs";

const password = "JUSTabban1"; // Replace with your actual password
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Your Hashed Password:");
  console.log(hash); // This is what you copy into your SQL INSERT
});
