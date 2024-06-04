const container = document.getElementById("container");
const currentDirectory = document.getElementById("dir");
const terminal = document.getElementById("terminal");
const input = document.getElementById("input");
let inputCounter = 0;

document.body.addEventListener("click", () => {
  input.focus();
});

function terminalInput(event) {
  if (event.key === "Tab") {
    event.preventDefault();
    input.focus();
  }

  const focusElement = document.activeElement.className;
  const isTyping = focusElement == "console-input";
  let isPrintableKey = event.key.length === 1;

  if (isTyping) {
    if (event.code == "Backspace") {
      if (inputCounter > 0) {
        inputCounter = inputCounter - 1;
        document.querySelector(".blink").style.transform = "translateX(" + (inputCounter * 10).toString() + "px)";
      }
    } else if (isPrintableKey) {
      inputCounter = inputCounter + 1;
      document.querySelector(".blink").style.transform = "translateX(" + (inputCounter * 10).toString() + "px)";
    }
  }
}

const addLine = (text, className) => {
  let t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }

  let tag = document.createElement("p");
  tag.className = className || "new-line";
  tag.innerHTML = t;
  terminal.append(tag);
  tag.scrollIntoView();
};

const addMultiLine = (command, className) => {
  command.map((line) => addLine(line, className));
};

const addOldLine = () => {
  let tag = document.createElement("div");
  tag.className = "prompt";

  let guestDiv = document.createElement("div");
  let guestText = document.createTextNode("guest@yyysolhhh\u00A0");
  guestDiv.appendChild(guestText);
  guestDiv.className = "green";

  let inDiv = document.createElement("div");
  let inText = document.createTextNode(``);
  inDiv.appendChild(inText);

  let folderDiv = document.createElement("div");
  let folderText = document.createTextNode(currentDirectory.innerText);
  folderDiv.appendChild(folderText);
  folderDiv.className = "purple";

  tag.appendChild(guestDiv);
  tag.appendChild(inDiv);
  tag.appendChild(folderDiv);

  let tag2 = document.createElement("div");
  tag2.className = "prompt";

  let arrowDiv = document.createElement("div");
  let arrowText = document.createTextNode("$\u00A0");
  arrowDiv.appendChild(arrowText);
  arrowDiv.className = "start-point";

  let commandDiv = document.createElement("div");
  let commandText = document.createTextNode(`${input.value}`);
  commandDiv.appendChild(commandText);

  tag2.appendChild(arrowDiv);
  tag2.appendChild(commandDiv);

  terminal.append(tag);
  terminal.append(tag2);
};

const resetCommand = () => {
  input.value = "";
  document.querySelector(".blink").style.transform = "translateX(" + (1).toString() + "px)";
  inputCounter = 0;
};

const clear = () => {
  terminal.innerHTML = ``;
  document.querySelector(".presentation").innerHTML = ``;
  document.querySelector(".presentation-text").innerHTML = ``;
};

const checkForCommand = () => {
  switch (input.value) {
    case "clear":
      clear();
      break;
    case "ls":
      addMultiLine(ls, "new-line");
      break;
    case "help":
      addMultiLine(help, "new-line");
      break;
    case "whois":
      addMultiLine(whois, "new-line");
      break;
    case "github":
      addMultiLine(github, "new-line");
      break;
    case "email":
      addMultiLine(email, "new-line");
      break;
    case "blog":
      addMultiLine(blog, "new-line");
      break;
    case "projects":
      addMultiLine(projects, "new-line");
      break;
    case "study":
      addMultiLine(study, "new-line");
      break;
    case "algo":
      addMultiLine(algo, "new-line");
      break;
    case "all":
      addMultiLine(all, "new-line");
      break;
    default:
      addMultiLine(notfound, "new-line");
  }
};

window.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addOldLine();
    checkForCommand();
    resetCommand();
  }
});

window.addEventListener("keydown", terminalInput);

// function command(cmd) {
//   switch (cmd.toLowerCase()) {
//     case "help":
//       help;
//       break;
//     case "whois":
//       whois;
//       break;
//     case "github":
//       github;
//       break;
//     case "email":
//       email;
//       break;
//     case "projects":
//       projects;
//       break;
//     case "secret":
//       secret;
//       break;
//   }
// }

// function enterKey(e) {
//   if (e.keyCode == 181) {
//     document.location.reload(true);
//   }
//   if (e.keyCode == 13) {
//     commands.push(command.innerHTML);
//     git = commands.length;
//     liner(command.innerHTML, "no-animation"), commander(command.innerHTML.toLowerCase());
//     command.innerHTML = "";
//     textarea.value = "";
//   }
//   if (e.keyCode == 38 && git != 0) {
//     git -= 1;
//     textarea.value = commands[git];
//     command.innerHTML = textarea.value;
//   }
//   if (e.keyCode == 40 && git != commands.length) {
//     git += 1;
//     if (commands[git] === undefined) {
//       textarea.value = "";
//     } else {
//       textarea.value = commands[git];
//     }
//     command.innerHTML = textarea.value;
//   }
// }
