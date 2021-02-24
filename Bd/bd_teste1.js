const postgres = require("postgres")

const sql = postgres('postgres://yqgnlusz:gDVpjZGbBWZ2w0p8Ty9PRPWvxtY2T7-m@motty.db.elephantsql.com:5432/yqgnlusz/tesouro_direto')


const td1 = sql `select * from tesouro_direto`


console.log(td1)
