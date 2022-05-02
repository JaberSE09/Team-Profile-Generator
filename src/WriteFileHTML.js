class writeFileHTML {

    getManagerHTML(manager){
            return `
            <div class="col-3 mt-3">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${manager.name}</h3>
                        <h4>Manager</h4>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${manager.id}</p>
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="office">Office Number: ${manager.office}</p>
                    </div>
                </div>
            </div>
            `;
    }
  getManager(team) {
    let content = [];

    for (let i = 0; i < team.length; i++) {
      const role = team[i].getRole();
      if (role === "Manager") {
        this.getManagerHTML(team[i])
      }else if(role === "Intern"){
        console.log(role);
      }else if(role === "Engineer"){
        console.log(role);
      }

    }
  }
}
module.exports = writeFileHTML;
