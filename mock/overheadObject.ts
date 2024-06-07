export const overheadObject = {
  users: [
    {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345",
      },
      orders: [
        {
          orderId: 101,
          date: "2023-05-15",
          status: "shipped",
          items: [
            {
              productId: 1001,
              quantity: 2,
              price: 29.99,
            },
            {
              productId: 1002,
              quantity: 1,
              price: 99.99,
            },
          ],
        },
        {
          orderId: 102,
          date: "2023-06-01",
          status: "delivered",
          items: [
            {
              productId: 1003,
              quantity: 1,
              price: 199.99,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@example.com",
      address: {
        street: "456 Elm St",
        city: "Shire",
        zip: "67890",
      },
      orders: [
        {
          orderId: 103,
          date: "2023-07-20",
          status: "processing",
          items: [
            {
              productId: 1001,
              quantity: 4,
              price: 29.99,
            },
            {
              productId: 1004,
              quantity: 2,
              price: 49.99,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@example.com",
      address: {
        street: "789 Oak St",
        city: "Metropolis",
        zip: "54321",
      },
      orders: [],
    },
    {
      id: 4,
      name: "Dave",
      email: "dave@example.com",
      address: {
        street: "101 Pine St",
        city: "Atlantis",
        zip: "98765",
      },
      orders: [
        {
          orderId: 104,
          date: "2023-08-10",
          status: "shipped",
          items: [
            {
              productId: 1005,
              quantity: 1,
              price: 59.99,
            },
            {
              productId: 1006,
              quantity: 3,
              price: 9.99,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Eve",
      email: "eve@example.com",
      address: {
        street: "202 Birch St",
        city: "Eden",
        zip: "65432",
      },
      orders: [
        {
          orderId: 105,
          date: "2023-09-05",
          status: "delivered",
          items: [
            {
              productId: 1007,
              quantity: 2,
              price: 19.99,
            },
          ],
        },
        {
          orderId: 106,
          date: "2023-09-15",
          status: "processing",
          items: [
            {
              productId: 1008,
              quantity: 5,
              price: 4.99,
            },
            {
              productId: 1009,
              quantity: 1,
              price: 299.99,
            },
          ],
        },
      ],
    },
  ],
  products: [
    {
      productId: 1001,
      name: "Widget A",
      category: "Widgets",
      price: 29.99,
      stock: 150,
    },
    {
      productId: 1002,
      name: "Gadget B",
      category: "Gadgets",
      price: 99.99,
      stock: 75,
    },
    {
      productId: 1003,
      name: "Doodad C",
      category: "Doodads",
      price: 199.99,
      stock: 50,
    },
    {
      productId: 1004,
      name: "Thingamajig D",
      category: "Thingamajigs",
      price: 49.99,
      stock: 200,
    },
    {
      productId: 1005,
      name: "Gizmo E",
      category: "Gizmos",
      price: 59.99,
      stock: 80,
    },
    {
      productId: 1006,
      name: "Contraption F",
      category: "Contraptions",
      price: 9.99,
      stock: 500,
    },
    {
      productId: 1007,
      name: "Device G",
      category: "Devices",
      price: 19.99,
      stock: 300,
    },
    {
      productId: 1008,
      name: "Appliance H",
      category: "Appliances",
      price: 4.99,
      stock: 1000,
    },
    {
      productId: 1009,
      name: "Machine I",
      category: "Machines",
      price: 299.99,
      stock: 25,
    },
  ],
  transactions: [
    {
      transactionId: "tx1001",
      userId: 1,
      orderId: 101,
      amount: 159.97,
      date: "2023-05-15",
      status: "completed",
    },
    {
      transactionId: "tx1002",
      userId: 1,
      orderId: 102,
      amount: 199.99,
      date: "2023-06-01",
      status: "completed",
    },
    {
      transactionId: "tx1003",
      userId: 2,
      orderId: 103,
      amount: 189.94,
      date: "2023-07-20",
      status: "pending",
    },
    {
      transactionId: "tx1004",
      userId: 4,
      orderId: 104,
      amount: 89.96,
      date: "2023-08-10",
      status: "completed",
    },
    {
      transactionId: "tx1005",
      userId: 5,
      orderId: 105,
      amount: 39.98,
      date: "2023-09-05",
      status: "completed",
    },
    {
      transactionId: "tx1006",
      userId: 5,
      orderId: 106,
      amount: 324.94,
      date: "2023-09-15",
      status: "pending",
    },
  ],
};
