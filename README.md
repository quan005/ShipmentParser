# ShipmentParser

## Running

To run this program, use:

```
npm run start
```

You should see this output:

```
Requirement #1:

Shipment #1:
Number: SH348503, Order Number: O567843, Shipped: 2018-12-10 15:08:58 -0000, First Name: Jane, Last Name: Smith, Parent Shipment: N/A

Shipment #2:
Number: SH465980, Order Number: O936726, Shipped: 2018-12-11 06:08:14 -0000, First Name: John, Last Name: Reynolds, Parent Shipment: N/A

Shipment #3:
Number: SH465994, Order Number: O936726, Shipped: 2018-12-11 06:12:37 -0000, First Name: John, Last Name: Reynolds, Parent Shipment: N/A

Shipment #4:
Number: SH867263, Order Number: O234934, Shipped: 2018-12-11 18:28:51 -0000, First Name: Rebecca, Last Name: Jones, Parent Shipment: N/A

Shipment #5:
Number: SH907346, Order Number: N/A, Shipped: 2018-12-12 21:12:28 -0000, First Name: Rebecca, Last Name: Jones, Parent Shipment: SH867263

Shipment #6:
Number: SH927813, Order Number: N/A, Shipped: 2018-12-15 09:49:35 -0000, First Name: Rebecca, Last Name: Jones, Parent Shipment: SH907346



Requirement #2:

{
  'Shipment Number': 'SH465980',
  'Order Number': 'O936726',
  'Shipped Date': '2018-12-11 06:08:14 -0000',
  'First Name': 'John',
  'Last Name': 'Reynolds',
  'Parent Shipment Number': ''
}

Requirement #3:

{
  'Shipment Number': 'SH465980',
  'Order Number': 'O936726',
  'Shipped Date': '2018-12-11 06:08:14 -0000',
  'First Name': 'John',
  'Last Name': 'Reynolds',
  'Parent Shipment Number': '',
  'Full Name': 'John, Reynolds',
  'Days Ago Shipped': 1292
}

Requirement #4:

[
  {
    'Shipment Number': 'SH465980',
    'Order Number': 'O936726',
    'Shipped Date': '2018-12-11 06:08:14 -0000',
    'First Name': 'John',
    'Last Name': 'Reynolds',
    'Parent Shipment Number': '',
    'Full Name': 'John, Reynolds',
    'Days Ago Shipped': 1292
  },
  {
    'Shipment Number': 'SH465994',
    'Order Number': 'O936726',
    'Shipped Date': '2018-12-11 06:12:37 -0000',
    'First Name': 'John',
    'Last Name': 'Reynolds',
    'Parent Shipment Number': '',
    'Full Name': 'John, Reynolds',
    'Days Ago Shipped': 1292
  }
]

Requirement #5:

[
  {
    'Shipment Number': 'SH348503',
    'Order Number': 'O567843',
    'Shipped Date': '2018-12-10 15:08:58 -0000',
    'First Name': 'Jane',
    'Last Name': 'Smith',
    'Parent Shipment Number': '',
    'Full Name': 'Jane, Smith',
    'Days Ago Shipped': 1293
  },
  {
    'Shipment Number': 'SH465980',
    'Order Number': 'O936726',
    'Shipped Date': '2018-12-11 06:08:14 -0000',
    'First Name': 'John',
    'Last Name': 'Reynolds',
    'Parent Shipment Number': '',
    'Full Name': 'John, Reynolds',
    'Days Ago Shipped': 1292
  },
  {
    'Shipment Number': 'SH465994',
    'Order Number': 'O936726',
    'Shipped Date': '2018-12-11 06:12:37 -0000',
    'First Name': 'John',
    'Last Name': 'Reynolds',
    'Parent Shipment Number': '',
    'Full Name': 'John, Reynolds',
    'Days Ago Shipped': 1292
  },
  {
    'Shipment Number': 'SH867263',
    'Order Number': 'O234934',
    'Shipped Date': '2018-12-11 18:28:51 -0000',
    'First Name': 'Rebecca',
    'Last Name': 'Jones',
    'Parent Shipment Number': '',
    'Full Name': 'Rebecca, Jones',
    'Days Ago Shipped': 1292
  },
  {
    'Shipment Number': 'SH907346',
    'Order Number': '',
    'Shipped Date': '2018-12-12 21:12:28 -0000',
    'First Name': 'Rebecca',
    'Last Name': 'Jones',
    'Parent Shipment Number': 'SH867263',
    'Full Name': 'Rebecca, Jones',
    'Days Ago Shipped': 1291
  },
  {
    'Shipment Number': 'SH927813',
    'Order Number': '',
    'Shipped Date': '2018-12-15 09:49:35 -0000',
    'First Name': 'Rebecca',
    'Last Name': 'Jones',
    'Parent Shipment Number': 'SH907346',
    'Full Name': 'Rebecca, Jones',
    'Days Ago Shipped': 1288
  }
]
```

## Running Tests

Tests are written in [Jest](https://jestjs.io/). To run unit tests, use:

```
npm run test
```
