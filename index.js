const Order = require("./src/order");

let order = `SH348503,O567843,2018-12-10 15:08:58 -0000,Jane,Smith,
SH465980,O936726,2018-12-11 06:08:14 -0000,John,Reynolds,
SH465994,O936726,2018-12-11 06:12:37 -0000,John,Reynolds,
SH867263,O234934,2018-12-11 18:28:51 -0000,Rebecca,Jones,
SH907346,,2018-12-12 21:12:28 -0000,Rebecca,Jones,SH867263
SH927813,,2018-12-15 09:49:35 -0000,Rebecca,Jones,SH907346`

let newOrder = new Order(order);

console.log("Requirement #1:\n")
console.log(newOrder.printShipments())
console.log("\nRequirement #2:\n")
console.log(newOrder.getShipmentProperties('SH465980'));
console.log("\nRequirement #3:\n")
console.log(newOrder.getAdditionalShipmentProperties('SH465980'));
console.log("\nRequirement #4:\n")
console.log(newOrder.getAssociatedShipments('O936726'));
console.log("\nRequirement #5:\n")
console.log(newOrder.sortByDaysAgoShipped());