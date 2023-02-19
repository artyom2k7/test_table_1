function fillTable(data) {
    var table = document.getElementById("table");
    table.innerHTML = "";
    var tr = document.createElement("tr");
    var colNames = ["firstName", "lastName", "about", "eyeColor"];
    for (let i = 0; i < colNames.length; i++) {
        var td = document.createElement("td");
        td.addEventListener("click", () => {
            sortTable(data, colNames[i]);
        })
        td.innerText = colNames[i]; //добавоение в td массива
        tr.appendChild(td); //В tr добавляем td
    }
    table.appendChild(tr);

    for (let i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            var td = document.createElement("td");
            td.classList.add("td");
            if (j == 3) {
                let div = document.createElement("div");
                div.classList.add("circle");
                //td.innerText = data[i]["eyeColor"];
                td.appendChild(div);
                div.style.background = data[i].eyeColor;
            }
            if (j == 2) {
                td.innerText = data[i]["about"];
                td.classList.add("about");
            }
            if (j == 1) {
                td.innerText = data[i]["name"]["lastName"];
            }
            if (j == 0) {
                td.innerText = data[i]["name"]["firstName"];
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
fillTable(data);

function sortTable(data, colName) {
    if (colName == "firstName" || colName == "lastName") {
        data.sort((a, b) => {
            if (a["name"][colName] < b["name"][colName]) {
                return -1;
            }

            if (a["name"][colName] > b["name"][colName]) {
                return 1;
            }
        })
    } else {
        data.sort((a, b) => {
            if (a[colName] < b[colName]) {
                return -1;
            }

            if (a[colName] > b[colName]) {
                return 1;
            }
        })
    }
    fillTable(data);
}