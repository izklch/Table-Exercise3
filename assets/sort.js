document.querySelectorAll('th').forEach(el=>{
    el.addEventListener('click',()=>{
        var colIndex = parseInt(el.getAttribute('data-index'));
        sortThisShzt(colIndex)
    })
})

function sortThisShzt(colIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("dev-table");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[colIndex].textContent;
            y = rows[i + 1].getElementsByTagName("TD")[colIndex].textContent;
            if(parseFloat(x) && parseFloat(y)) {
                if(parseFloat(x) > parseFloat(y)){
                    shouldSwitch = true;
                    break;
                }
            } else if (x.toUpperCase() > y.toUpperCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    reColour(colIndex)
}

function reColour(clickedColIndex) {
    //recolour rows
    document.querySelectorAll("tr").forEach((el,i)=>{
        td = el.getElementsByTagName("td")[0];
        if (td) {
            if(i%2==0){
                el.className = "bg-info"
              } else {
                el.className = "bg-primary"
              }
        }
    })

    //recolour table heads
    document.querySelectorAll("th").forEach((el,i)=>{
        var colIndex = parseInt(el.getAttribute('data-index'));
        if(clickedColIndex === colIndex){
            el.style.color = "green"
        } else {
            el.style.color = ""
        }
    })
}