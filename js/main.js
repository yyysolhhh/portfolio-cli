const og = document.getElementById("og");
const lines = document.getElementById("lines");
const command = document.getElementById("commander");
const textarea = document.getElementById("texter");
const terminal = document.getElementById("terminal");
let commands = [];
let git = 0;

function command(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      help;
      break;
    case "whois":
      whois;
      break;
    case "github":
      github;
      break;
    case "email":
      email;
      break;
    case "projects":
      projects;
      break;
    case "secret":
      secret;
      break;
  }
}

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    liner(command.innerHTML, "no-animation"), commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}
