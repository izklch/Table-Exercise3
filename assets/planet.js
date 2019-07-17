var request = new XMLHttpRequest()

request.open('GET', 'https://swapi.co/api/planets/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var table = document.getElementById("dev-table");
  var row
  var cell
  if (request.status >= 200 && request.status < 400) {
    for(var i in data.results) {
      row = table.insertRow(-1);
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
  } else {
    console.log('error')
  }
}

request.send()