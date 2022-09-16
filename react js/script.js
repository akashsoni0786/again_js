const emp = {
  position: String,
  type: String,
  isAvailable: Boolean,
};
let Employee = {};
let Food = {};
let emparr = [];
var mode = "off";

// Task 1 Add Details
function addDetails() {
  Employee = Object.create(emp);

  var pos = document.getElementById("position");
  var selectedpos = pos.options[pos.selectedIndex].text;

  var typ = document.getElementById("type");
  var selectedtyp = typ.options[typ.selectedIndex].text;

  var available = document.getElementById("available");
  var selectedavailable = available.options[available.selectedIndex].text;

  if (selectedpos == "" || selectedtyp == "" || selectedavailable == "") {
    alert("Please select from all category!");
  } else {
    Employee["position"] = selectedpos;
    Employee["type"] = selectedtyp;
    Employee["isAvailable"] = selectedavailable;
    var row =
      "<table border=1><tr><th>Position</th><th>Type</th><th>Availability</th></tr><tr><td>" +
      Employee["position"] +
      "</td><td>" +
      Employee["type"] +
      "</td><td>" +
      Employee["isAvailable"] +
      "</td></tr></table>";
    document.getElementById("employeeadded").innerHTML = row;
    showkeyvalues();
    foodobj();
  }
}
// Task 2 Showing Keys
function showKeys() {
  var keys = [String(Object.keys(Employee))];
  emparr = Object.keys(Employee);
  document.getElementById("keys").innerHTML =
    "Total Keys : " + emparr.length + "     [" + keys + "]";
}
// Task 3 Showing details
function showDetails() {
  Employee = Object.create(emp);

  var pos = document.getElementById("position");
  var selectedpos = pos.options[pos.selectedIndex].text;

  var typ = document.getElementById("type");
  var selectedtyp = typ.options[typ.selectedIndex].text;

  var available = document.getElementById("available");
  var selectedavailable = available.options[available.selectedIndex].text;

  if (selectedpos == "" || selectedtyp == "" || selectedavailable == "") {
    alert("Please select from all category!");
  } else {
    Employee["position"] = selectedpos;
    Employee["type"] = selectedtyp;
    Employee["isAvailable"] = selectedavailable;
    var row =
      "<table border=1><tr><th>Position</th><th>Type</th><th>Availability</th></tr><tr><td>" +
      Employee["position"] +
      "</td><td>" +
      Employee["type"] +
      "</td><td>" +
      Employee["isAvailable"] +
      "</td></tr></table>";
    document.getElementById("employeetable").innerHTML = row;
    showkeyvalues();
    foodobj();
  }
}
// Task 2 Showing Keys
function showkeyvalues() {
  var row = Object.entries(Employee);
  let v = "[";
  row.map((i) => {
    v += "[" + i[0] + "," + i[1] + "]";
  });
  v += "]";
  document.getElementById("Keyvalue").innerHTML = v;
}
// Task 5 Merging of Objects
function foodobj() {
  var Food = {
    resturant: "Brijwasi Resturant",
    location: "Lucknow",
    Open: "Yes",
  };
  var merged = Object.assign(Food, Employee);
  var all = Object.entries(merged);
  let v = "<h2>Merged Food and Employee Objects</h2><br><table border=1>";
  all.map((i) => {
    v += "<tr><td>" + i[0] + "</td><td>" + i[1] + "</td></tr>";
  });
  v += "</table>";
  document.getElementById("mergedarr").innerHTML = v;
}
// Task 6 prevent change in details
function prevent() {
  mode = "on";
  Object.freeze(Employee);
  alert("Prevent mode is on!");
}
function update() {
  if (mode == "on") {
    alert("Can't update due to prevent mode");
  }
  var typr = document.getElementById("updatedtype");
  var selectedtypr = typr.options[typr.selectedIndex].text;

  var pos = document.getElementById("position");
  var selectedpos = pos.options[pos.selectedIndex].text;

  var available = document.getElementById("available");
  var selectedavailable = available.options[available.selectedIndex].text;

  Employee["position"] = selectedpos;
  Employee["type"] = selectedtypr;
  Employee["isAvailable"] = selectedavailable;
  var rows =
    "<table border=1><tr><th>Position</th><th>Type</th><th>Availability</th></tr><tr><td>" +
    Employee["position"] +
    "</td><td>" +
    Employee["type"] +
    "</td><td>" +
    Employee["isAvailable"] +
    "</td></tr></table>";
  document.getElementById("employeetableprevent").innerHTML = rows;
}
