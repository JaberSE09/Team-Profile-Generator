//write to file html layout
class writeFileHTML {
  //Generated the manager html
  getManagerHTML(manager) {
    return `
            <div class="col-2 mt-3 m-3">
                <div class="card h-100 border-dark border-left-0 border-top-0 shadow mb-3 bg-white">
                    <div class="card-header bg-info text-white">
                        <h3>${manager.name}</h3>
                        <h4><i class="fa-solid fa-mug-hot"></i>  Manager</h4>
                    </div>
                    <div class="card-body">
                        <p class="list-group-item">ID: ${manager.id}</p>
                        <p class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="list-group-item">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
                </div>
            `;
  }
//Engineer layout
  EngineerHTML(engineer) {
    return `
        <div class="col-2 mt-3 m-3">
            <div class="card h-100 border-dark border-left-0 border-top-0 shadow mb-3 bg-white">
                <div class="card-header bg-info text-white">
                    <h3>${engineer.name}</h3>
                    <h4><i class="fa-solid fa-glasses"></i> Engineer</h4>
                </div>
                <div class="card-body">
                    <p class="list-group-item">ID: ${engineer.id}</p>
                    <p class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="list-group-item">Github: <a href="https://github.com/${engineer.GitHub}">${engineer.GitHub}</a></p>
                </div>
            </div>
        </div>
        `;
  }

  // create Intern card
  InternHTML(intern) {
    return `
        <div class="col-2 mt-3 m-3">
            <div class="card h-100 border-dark border-left-0 border-top-0 shadow mb-3 bg-white">
                <div class="card-header bg-info text-white">
                    <h3>${intern.name}</h3>
                    <h4><i class="fa-solid fa-user-graduate"></i> Intern</h4>
                </div>
                <div class="card-body">
                    <p class="list-group-item">ID: ${intern.id}</p>
                    <p class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="list-group-item">School: ${intern.school}</p>
                </div>
        </div>
    </div>
        `;
  }

  //puts the 3 functions together and returns the full html file
  getProfile(team) {
    let content = "";

    for (let i = 0; i < team.length; i++) {
      const role = team[i].getRole();
      if (role === "Manager") {
        const managerHTMLEl = this.getManagerHTML(team[i]);

        content += managerHTMLEl;
      } else if (role === "Intern") {
        const internHTMLEl = this.InternHTML(team[i]);
        content += internHTMLEl;
      } else if (role === "Engineer") {
        const engineerHTMLEl = this.EngineerHTML(team[i]);
        content += engineerHTMLEl;
      }
    }

    const file = this.HTMLFile(content);
    return file;
  }

  HTMLFile(content) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/fba508aeb6.js" crossorigin="anonymous"></script>
</head>
    <header>    
    <h1 class="text-center p-5 bg-danger text-white">My Team</h1>
    <main class= "d-flex flex-row m-3 justify-content-center">
    ${content}
    </main>
    </header>


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<body>
    
</body>
</html>
    
    
    
    `;
  }
}
module.exports = writeFileHTML;
