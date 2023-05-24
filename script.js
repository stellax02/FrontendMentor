fetch("data.json")

.then(function(response) {
    return response.json();
})

.then(function(data) {
    let placeholder = document.querySelector("#data-output");

    let out = "";

    for (let i = 0; i < data.length; i++) {
        out += `
            
            <div class="summary-item" data-item-type="${data[i].color}"> 
                <div class="flex-group">
                    <img class="summary-icon" src="${data[i].icon}" alt="icon">
                    <h3 class="summary-item-title">${data[i].category}</h3>
                </div>
                <p class="summary-score"><span>${data[i].score}</span> / 100</p>
            </div>
        
        `;
    }
    
    placeholder.innerHTML = out;
})