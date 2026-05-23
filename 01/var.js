const accountId = 144553
let accountEmail = "nandu@nandu.com"
var accountPassword = "Nandu123"
accountCity= "Hyderabad"
let accountState;

//accountId=2 not allowed for const

/*
DOnt use var becoz of scope block
*/

accountEmail= "nandu@gatla.com"
accountPassword = "Nandu@123"
accountCity = "Mumbai"
console.log(accountEmail);
console.table([accountId, accountEmail,accountPassword, accountCity, accountState])
