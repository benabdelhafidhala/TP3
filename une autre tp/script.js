const EtudiantInput = document.getElementById("EtudiantInput");
const addBtn = document.getElementById("addBtn");
const TableE = document.getElementById("TableE");

function addEtudiant() {
    const nom = EtudiantInput.value.trim();

    if (nom === "") {
        alert("Veuillez saisir un étudiant !");
        return;
    }

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const tdAction = document.createElement("td");
    const btn = document.createElement("button");

    td.textContent = nom;
    btn.textContent = "X";

    btn.addEventListener("click", function() {
        tr.remove();
    });

    tdAction.appendChild(btn);

    tr.appendChild(td);
    tr.appendChild(tdAction);

    TableE.appendChild(tr);

    EtudiantInput.value = "";
}

addBtn.addEventListener("click", addEtudiant);