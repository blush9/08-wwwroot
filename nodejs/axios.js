const has = require("axios");
const url = "http://vue.api.comcto.com/api/helloworld.php";
has.get(url).then(function (d) {  
    console.log(d.data)
    // console.log(d)
})


// console.log(111)