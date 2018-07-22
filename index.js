const app = "I don't do much.";

const token = ' da4f675e128aa66a149793db2bead57d6c6490a6 '
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
