import data from "../data.json" assert {type: "json"};
console.log(data);
var content = ""
for (let index = 0; index < data.projects.length; index++) {
    const element = data.projects[index];
    content += element.name + "\n"
}
document.body.innerText = content
// fetch('../data.json')
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json);
//         nav = document.getElementsByTagName("nav")[0];
//         nav.innerHTML = json;
//     });