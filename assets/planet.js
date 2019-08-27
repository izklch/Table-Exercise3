var request = new XMLHttpRequest()

request.open('GET', 'https://swapi.co/api/planets/', true)
request.onerror = function(){
  document.querySelector("#loading-indicator h5").textContent = "Connection Error";
  document.querySelector("#loading-indicator h6").textContent = "Please Try Again";
  console.log('error')
}
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var table = document.getElementById("dev-table");
  var row
  var cell
  if (request.status >= 200 && request.status < 400) {
    // data.results is an array, avoid using for..in loop:
    // for(var i in data.results) {
    for(var i=0; i < data.results.length; i++) {
      row = table.insertRow(-1);
      if(i%2!==0){
        row.className = "bg-info"
      } else {
        row.className = "bg-primary"
      }
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].name
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].rotation_period
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].orbital_period
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].diameter
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].climate
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].gravity
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].terrain
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].surface_water
      cell = row.insertCell(-1);
      cell.innerHTML = data.results[i].population
    }
    document.querySelector("#loading-indicator").remove()
  } else {
    document.querySelector("#loading-indicator h5").textContent = "Connection Error";
    document.querySelector("#loading-indicator h6").textContent = "Please Try Again";
    console.log('error')
  }
}

request.send()
