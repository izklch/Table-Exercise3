var selectionIndex = 0;
function myFilter() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("dev-table-filter");
    filter = input.value.toUpperCase();
    table = document.getElementById("dev-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[selectionIndex];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function resetFilter() {
    document.querySelector('#dev-table-filter').value = "";
    myFilter();
}

document.querySelector("#category").addEventListener('change',function(){
    selectionIndex = this.value;
    var filter = document.querySelector('#dev-table-filter');
    var placeholderStringBase = "Filter Planets By ";
    switch (selectionIndex) {
        case '0':
            filter.setAttribute('placeholder',placeholderStringBase + "Name");
            break;
        case '1':
            filter.setAttribute('placeholder',placeholderStringBase + "Rotation Period");
            break;
        case '2':
            filter.setAttribute('placeholder',placeholderStringBase + "Orbital Period");
            break;
        case '3':
            filter.setAttribute('placeholder',placeholderStringBase + "Diameter");
            break;
        case '4':
            filter.setAttribute('placeholder',placeholderStringBase + "Climate");
            break;
        case '5':
            filter.setAttribute('placeholder',placeholderStringBase + "Gravity");
            break;
        case '6':
            filter.setAttribute('placeholder',placeholderStringBase + "Terain");
            break;
        case '7':
            filter.setAttribute('placeholder',placeholderStringBase + "Surface Water");
            break;
        case '8':
            filter.setAttribute('placeholder',placeholderStringBase + "Population");
            break;
    }
})
