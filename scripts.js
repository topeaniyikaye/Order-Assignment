document.getElementById('submitOrder').addEventListener('click', function () {
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var component = document.getElementById('component').value;
  var quantity = document.getElementById('quantity').value;
  var form = document.getElementById('orderForm');


  //get order checkout details fields
  var orderNameCheckout = document.getElementById('orderName');
  var orderItemCheckout = document.getElementById('orderItem');
  var orderAmountCheckout = document.getElementById('orderAmount');
  var orderDetailsBox = document.getElementById('orderDetails');

  //creating a map set
  let orderValueMaps = new Map();
  
  //adding values from to the map set
  orderValueMaps.set("Processor", 1500);
  orderValueMaps.set("Memory (RAM)", 200);
  orderValueMaps.set("Storage (SSD/HDD)", 800);
  orderValueMaps.set("Graphics Card", 200);
  orderValueMaps.set("Motherboard", 2900);
  orderValueMaps.set("Power Supply", 300);
  orderValueMaps.set("Computer Case", 890);


//function to process order
function OrderProcessing(Map){
  let orderPrice = orderValueMaps.get(component);
  let orderTotal = orderPrice*quantity;
  return orderTotal;
}



  // Validate form
  if (name === '' || email === '' || component === '' || quantity === '') {
      document.getElementById('orderResult').innerHTML = 'Please fill in all fields';
  } else {
      // Perform order processing
      document.getElementById('orderResult').innerHTML = 'Order placed successfully!';
      form.reset();
      
      let result = OrderProcessing(orderValueMaps);
      orderNameCheckout.innerHTML = name;
      orderItemCheckout.innerHTML = component + " X " + quantity;
      orderAmountCheckout.innerHTML = result;
      form.style.display = "none";
      orderDetailsBox.style.display = "flex";

  }
}
);

document.getElementById('shopMore').addEventListener('click', function (){
    location.reload();
    console.log("hello world")
});
