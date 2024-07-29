// Workflow : 
// Get data > Write card function > Generate HTML > Put on the web page

// import {html} from "./htl.js"
// import d3

// data = d3.csv(""")


function card(data) {
    return html`
        <div class="project-card">
            <img src="${data.imageLink}" alt="">
            <div class="details">
                <h3>${data.title}</h3>
                <p class="description">${data.description}</p>
                <a href="${data.projectLink}">Project link</a>
            </div>
        </div>
    `;
}

// the map an loop function

// Write the render function