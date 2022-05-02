class writeFileHTML {


  getManager(team) {
    let content = [];

    for (let i = 0; i < team.length; i++) {
      const role = team[i].getRole();
      if (role === "Manager") {

      }else if(role === "Intern"){
        console.log(role);
      }else if(role === "Engineer"){
        console.log(role);
      }

    }
  }
}
module.exports = writeFileHTML;
