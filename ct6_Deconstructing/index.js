
let userArray = process.argv.slice(2);



let [userId, username, email, age, firstName, lastName] = userArray;
 


console.log(`{ username: '${username}', email: '${email}' }`); // {username: "jdoe", email: "john@doe.com"}


