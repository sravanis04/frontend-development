let restaurantName="Venkatesh Battu"
let foodItemName="Mutton Biryani - full spicy!"
let price=280
let quantity=2
let customerName="mesh Naidu garu"
let isDeliveryNeeded=true
let deliveryArea="Beach Road"
let deliveryCharges=40

console.log("=== ORDER SUMMARY - ANDHRA STYLE ===")
console.log("restaurant:",restaurantName)
console.log("Customer:",customerName)
console.log("Item:",foodItemName)
console.log("Quantity:",quantity)
console.log("Price per Item:",price)
console.log("Subtotal:",price*quantity)
console.log("Delivery to:",deliveryArea)
console.log("Delivery charges:",deliveryCharges)
console.log("Total:",(price*quantity)+deliveryCharges+"konchem ekkuva ayyindi kaani taste ki worth it!")
if(isDeliveryNeeded==true){
    console.log("Delivery kavala?: Yes mama")
}
else{
    console.log("no delivery needed")
}
console.log("Estimated time: 45 mminutes - traffic batti depend chesthundi")
