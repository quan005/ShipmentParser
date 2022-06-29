const { getDaysSinceShipped } = require("./utilities");

class Order {
  constructor(order) {
    this.order = order;
    this.shipments = [];
    this.parseOrder(this.order);
  }

  parseOrder(order) {
    const parsedOrder = order.split(/\r?\n/);

    parsedOrder.map(newOrder => {
      let parsedNewOrder = newOrder.split(',');

      let shipment = {
        "Shipment Number": parsedNewOrder[0],
        "Order Number": parsedNewOrder[1],
        "Shipped Date": parsedNewOrder[2],
        "First Name": parsedNewOrder[3],
        "Last Name": parsedNewOrder[4],
        "Parent Shipment Number": parsedNewOrder[5]
      }

      this.shipments.push(shipment);
    });
  }

  printShipments() {
    let shipments = ``
    let shipmentNumber = 1

    this.shipments.map(shipment => {
      let orderNumber = shipment["Order Number"] === '' ? 'N/A' : shipment["Order Number"]
      let parentShipment = shipment["Parent Shipment Number"] === '' ? 'N/A' : shipment["Parent Shipment Number"]
      let tempString = `Shipment #${shipmentNumber}:\nNumber: ${shipment["Shipment Number"]}, Order Number: ${orderNumber}, Shipped: ${shipment["Shipped Date"]}, First Name: ${shipment["First Name"]}, Last Name: ${shipment["Last Name"]}, Parent Shipment: ${parentShipment}\n\n`
      shipmentNumber ++
      shipments += tempString
    })

    return shipments;
  };

  getShipmentProperties(shipmentNumber) {
    for(let i = 0; i < this.shipments.length; i++) {
      if (this.shipments[i]["Shipment Number"] === shipmentNumber) {
        return this.shipments[i]
      }
    }

    return "The Shipment with the provided Shipment Number does not exist!"
  };

  getAdditionalShipmentProperties(shipmentNumber) {
    const shipmentProperties = this.getShipmentProperties(shipmentNumber);
    
    if (shipmentProperties["First Name"]) {
      const daysSinceShipped = getDaysSinceShipped(shipmentProperties["Shipped Date"]);
      const fullName = `${shipmentProperties["First Name"]}, ${shipmentProperties["Last Name"]}`

      shipmentProperties["Full Name"] = fullName;
      shipmentProperties["Days Ago Shipped"] = daysSinceShipped;

      return shipmentProperties

    } else {
      return shipmentProperties
    }
  };

  getAssociatedShipments(orderNumber) {
    const associated = [];

    for(let i = 0; i < this.shipments.length; i++) {
      if (this.shipments[i]["Order Number"] === orderNumber) {
        let shipment = this.getAdditionalShipmentProperties(this.shipments[i]["Shipment Number"]);

        associated.push(shipment);
      }
    }

    return associated;
  };

  sortByDaysAgoShipped() {
    const sortedShipments = this.shipments.sort((a, b) => (a["Shipped Date"] > b["Shipped Date"]) ? 1 : -1)
    const sorted = []

    for(let i = 0; i < sortedShipments.length; i++) {
      let shipment = this.getAdditionalShipmentProperties(sortedShipments[i]["Shipment Number"]);
      sorted.push(shipment);
    }

    return sorted;
  };
}

module.exports = Order