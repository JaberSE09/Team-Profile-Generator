const TeamProfile = require("./lib/TeamProfile")

const input = new TeamProfile()

input.getManager().then(function(response){
    console.log(response);
})