
const sections = document.querySelector('section');
const sectionH1 = document.querySelector('h2');


// sectuion class ready and style for work....................................................

sections.style.padding = "50px";
sections.style.backgroundColor = "#f20620";
sections.style.borderRadius = "10px";
sections.style.border = "10px solid #000"
sections.style.maxWidth = ' 1000px';
sections.style.margin = " 50px auto";


// add alada class 
sections.classList.add('sujon');

// remuve class ...........................
sections.classList.remove('sujon');

// h2 style kora..............................
sectionH1.style.textAlign = "center";
sectionH1.style.fontSize = '100px';
sectionH1.style.color = "#fff";