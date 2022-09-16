const prototype = {
  id: Number,
  name: String,
  price: Number,
  quan: Number,
  inc: function () {
    this.quan = Number(this.quan) + 1;
  },
  dec: function () {
    if (this.quan > 1) {
      this.quan = Number(this.quan) - 1;
    } else {
      alert("Quantity can't be zero");
    }
  },
};
allproduct = {};

let f = document.querySelector("form");
f.addEventListener("submit", function addproduct(e) {
  e.preventDefault();
  let pid = document.getElementById("pro_id").value;
  let pr_name = document.getElementById("pro_name").value;
  let pr_price = document.getElementById("pro_price").value;
  let quantity = document.getElementById("pro_quan").value;
  var product = Object.create(prototype);
  product.id = pid;
  product.name = pr_name;
  product.price = pr_price;
  product.quan = quantity;

  if (pid == "" || pr_name == "" || pr_price == "" || quantity == "") {
    alert("All fields are mendetory");
  } else {
    allproduct[product["id"]] = product;
    render();
  }
});

function render() {
  var row =
    "<h1>Product Table</h1><br><table border=1><tr><td>Product Id</td><td>Product Name</td><td>Product Quantity</td><td>Product Price</td><td>Remove</td></tr>";
  for (let i in allproduct) {
    row += `<tr><td> 
      ${allproduct[i]["id"]}
      </td><td> 
      ${allproduct[i]["name"]} 
      </td><td><i class='fa fa-minus' id='iconsminus' aria-hidden='true' onclick='decrease(${i})'></i>
      ${allproduct[i]["quan"]}
      <i class='fa fa-plus' onclick='increase(${i})' id='iconsplus' aria-hidden='true'></i></td><td> 
      ${allproduct[i]["price"]} 
      </td><td><i class='fa fa-trash deleteicon' aria-hidden='true' onclick='deleterow(${allproduct[i]["id"]})' ></i></td></tr>`;
  }
  row += "</table>";
  document.getElementById("producttable").innerHTML = row;
}

function deleterow(e) {
  delete allproduct[e];
  render();
}

function increase(id) {
  allproduct[id].inc();
  render();
}

function decrease(id) {
  allproduct[id].dec();
  render();
}
