let body = document.body;
let paragraph = document.getElementsByClassName("p");
let bgcolor = prompt('Enter body background-color:');
let txtcolor = prompt('Enter text color:');

body.style.backgroundColor = `${bgcolor}`;
for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = txtcolor;
}