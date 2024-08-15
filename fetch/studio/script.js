//TODO: Add Your Code Below
window.addEventListener("load", function() {
    const container = document.getElementById("container");
    const countElement = document.getElementById("astronaut-count");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
    })
    .then(function(json) {
        json.sort(function(a,b) {
            return b.hoursInSpace - a.hoursInSpace;
        }); 

        countElement.textContent = `Total Astronauts: ${json.length}`;
        for (let i = 0; i < json.length; i++) {
            const astronaut = json[i];
            const activeClass = astronaut.active ? 'active' : '';
            container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li class="${activeClass}">Active: ${astronaut.active}</li>
                        <li>Skills: ${json[i].skills.join(', ')}</li>   
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
            `;
        }
    })
    .catch(function(error) {
        console.error("Error fetching data:", error);
    });
});