const prototype = {
  id: "",
  name: "",
  price: "",
  quan: "",
  edit: () => {},
};
allproduct = {};

let f = document.querySelector("form");
f.addEventListener("submit",function addproduct(e) {
    e.preventDefault();
    let pid = document.getElementById("pro_id").value;
    let pr_name = document.getElementById("pro_name").value;
    let pr_price = document.getElementById("pro_price").value;
    let quantity = document.getElementById("pro_quan").value;
    const product = Object.create(prototype);
    product['id'] = pid;
    product['name'] = pr_name;
    product['price'] = pr_price;
    product['quan'] = quantity;
    allproduct[product['id']]=product;
    console.log(allproduct)
    var row = "<h1>Product Table</h1><br><table border=1><tr><td>Product Id</td><td>Product Name</td><td>Product Quantity</td><td>Product Price</td></tr>";
    for (let x in allproduct) {
        // txt += person[x] + " ";
     
        row += "<tr><td>"+i.id+"</td><td>"+i.name+"</td><td><i class='fa fa-minus' id='iconsminus' aria-hidden='true'></i>"+i.price+"<i class='fa fa-plus' id='iconsplus' aria-hidden='true'></i></td><td>"+i.quan+"</td></tr>"
    }
    row+="</table>";

    document.getElementById("producttable").innerHTML=row;

  })

