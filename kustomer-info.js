{
  "data": {
    "type": "customer",
    "id": "58b05b9853052f110010f7ee",
    "attributes": {
      "name": "Matt Chabrier",
      "displayName": "Matt Chabrier",
      "displayColor": "orange",
      "displayIcon": "cake",
      "externalIds": [],
      "firstName": "Matt",
      "lastName": "Chabrier",
      "sharedExternalIds": [],
      "emails": [
        {
          "email": "matt@kustomer.com",
          "verified": false,
          "type": "home"
        }
      ],
      "sharedEmails": [],
      "phones": [],
      "sharedPhones": [],
      "socials": [],
      "sharedSocials": [],
      "urls": [],
      "locations": [],
      "activeUsers": [
        "58b0603253052f110010ffc1"
      ],
      "watchers": [],
      "recentLocation": {
        "updatedAt": "2017-02-24T16:13:12.081Z"
      },
      "createdAt": "2017-02-24T16:13:12.080Z",
      "updatedAt": "2017-02-26T23:48:26.742Z",
      "modifiedAt": "2017-02-24T16:13:12.080Z",
      "lastActivityAt": "2017-02-24T16:33:46.102Z",
      "lastCustomerActivityAt": "2017-02-24T16:33:46.102Z",
      "deleted": false,
      "lastMessageIn": {
        "sentiment": {}
      },
      "lastConversation": {
        "tags": [],
        "sentiment": {}
      },
      "conversationCounts": {
        "done": 0,
        "open": 0,
        "snoozed": 0,
        "all": 0
      },
      "preview": {},
      "tags": [],
      "progressiveStatus": null,
      "verified": true,
      "rev": 12
    },
    "relationships": {
      "org": {
        "links": {
          "self": "/v1/orgs/58b05b70684a101100a17ebf"
        },
        "data": {
          "type": "org",
          "id": "58b05b70684a101100a17ebf"
        }
      },
      "messages": {
        "links": {
          "self": "/v1/customers/58b05b9853052f110010f7ee/messages"
        }
      },
      "createdBy": {
        "links": {
          "self": "/v1/users/58b05b7053052f110010f7bd"
        },
        "data": {
          "type": "user",
          "id": "58b05b7053052f110010f7bd"
        }
      },
      "modifiedBy": {
        "links": {
          "self": "/v1/users/58b05b7053052f110010f7bd"
        },
        "data": {
          "type": "user",
          "id": "58b05b7053052f110010f7bd"
        }
      },
      "company": {
        "links": {
          "self": "/v1/companies/58b05b9853052f110010f7ec"
        },
        "data": {
          "type": "company",
          "id": "58b05b9853052f110010f7ec"
        }
      },
      "orders": {
        "links": {
          "self": "/v1/customers/58b05b9853052f110010f7ee/klasses/orders"
        },
        "meta": {
          "kobject": true
        }
      }
    },
    "links": {
      "self": "/v1/customers/58b05b9853052f110010f7ee"
    }
  }
}

// {
//   "title": "Order #09832402u0942 (2 items ordered for $338.98)",
//   "icon": "truck-delivery",
//   "images": [
//     "https://dl.dropboxusercontent.com/u/7062951/img_test/genesis-lightsabers.jpg",
//     "http://img.costumecraze.com/images/vendors/rubies/882019-Deluxe-Kids-Chewbacca-Costume-large.jpg"
//   ],
//   "data": {},
//   "custom": {
//     "orderUpdatedAt": "2017-02-24",
//     "totalPriceNum": 338.98,
//     "orderDescriptionStr": "2 items ordered for $338.98",
//     "orderNumberNum": "09832402u0942",
//     "deliveryMethod": "Fedex",
//     "trackingNum": 607737563977,
//     "trackingUrl": "https://www.fedex.com/apps/fedextrack/?tracknumbers=607737563977"
//   }
// }

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.kustomerapp.com/v1/v1/klasses/mattchabrier",
//   "method": "POST",
//   "headers": {
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjM1MmQ4MGVmYjJiMTEwMDU2ODdmOCIsInVzZXIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIiLCJvcmciOiI1OGIwNWI3MDY4NGExMDExMDBhMTdlYmYiLCJvcmdOYW1lIjoienp6LWlzYWJlbGwiLCJ1c2VyVHlwZSI6Im1hY2hpbmUiLCJyb2xlcyI6WyJvcmcudXNlciIsIm9yZy5hZG1pbi5iaWxsaW5nIiwib3JnLmFkbWluIiwib3JnLmFkbWluLmNvbnRlbnQiLCJvcmcudHJhY2tpbmciLCJvcmcuYWRtaW4udXNlciIsIm9yZy5hZG1pbi5hcHBzIiwib3JnLmhvb2tzIl0sImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIifQ.N84SFmKeUvsYKk2C2Ry5_8svAzDXWAw8oYvYQjLLaWk",
//     "content-type": "application/json"
//   },
//   "processData": false,
//   "data": "{\"title\":\"Order #09832402u0942 (2 items ordered for $338.98)\",\"icon\":\"truck-delivery\",\"images\":[\"https://dl.dropboxusercontent.com/u/7062951/img_test/genesis-lightsabers.jpg\",\"http://img.costumecraze.com/images/vendors/rubies/882019-Deluxe-Kids-Chewbacca-Costume-large.jpg\"],\"data\":{},\"custom\":{\"orderDate\":\"2017-02-24\",\"totalPriceNum\":338.98,\"orderDescriptionStr\":\"2 items ordered for $338.98\",\"orderNumberNum\":\"09832402u0942\",\"deliveryMethod\":\"Fedex\",\"trackingNum\":607737563977,\"trackingURL\":\"https://www.fedex.com/apps/fedextrack/?tracknumbers=607737563977\"}}"
// }

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

//first do customer search
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.kustomerapp.com/v1/customers/search",
  "method": "POST",
  "headers": {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjM1MmQ4MGVmYjJiMTEwMDU2ODdmOCIsInVzZXIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIiLCJvcmciOiI1OGIwNWI3MDY4NGExMDExMDBhMTdlYmYiLCJvcmdOYW1lIjoienp6LWlzYWJlbGwiLCJ1c2VyVHlwZSI6Im1hY2hpbmUiLCJyb2xlcyI6WyJvcmcudXNlciIsIm9yZy5hZG1pbi5iaWxsaW5nIiwib3JnLmFkbWluIiwib3JnLmFkbWluLmNvbnRlbnQiLCJvcmcudHJhY2tpbmciLCJvcmcuYWRtaW4udXNlciIsIm9yZy5hZG1pbi5hcHBzIiwib3JnLmhvb2tzIl0sImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIifQ.N84SFmKeUvsYKk2C2Ry5_8svAzDXWAw8oYvYQjLLaWk",
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"and\":[],\"or\":[{\"customer_name\":{\"equals\":\"Matt Chabrier\"}},{\"customer_email\":{\"equals\":\"matt@kustomer.com\"}},{\"customer_phone\":{\"equals\":\"\"}}]}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
{
  "meta": {
    "pageSize": 100,
    "page": 1,
    "total": 1,
    "totalPages": 1,
    "aggregations": {
      "status": {
        "done": 0,
        "open": 0,
        "snoozed": 0
      },
      "popular_tags": {},
      "average_sentiment": {
        "polarity": null,
        "confidence": null
      }
    }
  },
  "data": [
    {
      "type": "customer",
      "id": "58b05b9853052f110010f7ee",
      "attributes": {
        "name": "Matt Chabrier",
        "displayName": "Matt Chabrier",
        "displayColor": "orange",
        "displayIcon": "cake",
        "externalIds": [],
        "firstName": "Matt",
        "lastName": "Chabrier",
        "sharedExternalIds": [],
        "emails": [
          {
            "email": "matt@kustomer.com",
            "verified": false,
            "type": "home"
          }
        ],
        "sharedEmails": [],
        "phones": [],
        "sharedPhones": [],
        "socials": [],
        "sharedSocials": [],
        "urls": [],
        "locations": [],
        "activeUsers": [
          "58b0603253052f110010ffc1"
        ],
        "watchers": [],
        "recentLocation": {
          "updatedAt": "2017-02-24T16:13:12.081Z"
        },
        "createdAt": "2017-02-24T16:13:12.080Z",
        "updatedAt": "2017-02-27T15:22:59.402Z",
        "modifiedAt": "2017-02-24T16:13:12.080Z",
        "lastActivityAt": "2017-02-24T16:33:46.102Z",
        "lastCustomerActivityAt": "2017-02-24T16:33:46.102Z",
        "deleted": false,
        "lastMessageIn": {
          "sentiment": {}
        },
        "lastConversation": {
          "tags": [],
          "sentiment": {}
        },
        "conversationCounts": {
          "done": 0,
          "open": 0,
          "snoozed": 0,
          "all": 0
        },
        "preview": {},
        "tags": [],
        "progressiveStatus": null,
        "verified": true,
        "rev": 18
      },
      "relationships": {
        "org": {
          "links": {
            "self": "/v1/orgs/58b05b70684a101100a17ebf"
          },
          "data": {
            "type": "org",
            "id": "58b05b70684a101100a17ebf"
          }
        },
        "messages": {
          "links": {
            "self": "/v1/customers/58b05b9853052f110010f7ee/messages"
          }
        },
        "createdBy": {
          "links": {
            "self": "/v1/users/58b05b7053052f110010f7bd"
          },
          "data": {
            "type": "user",
            "id": "58b05b7053052f110010f7bd"
          }
        },
        "modifiedBy": {
          "links": {
            "self": "/v1/users/58b05b7053052f110010f7bd"
          },
          "data": {
            "type": "user",
            "id": "58b05b7053052f110010f7bd"
          }
        },
        "company": {
          "links": {
            "self": "/v1/companies/58b05b9853052f110010f7ec"
          },
          "data": {
            "type": "company",
            "id": "58b05b9853052f110010f7ec"
          }
        },
        "orders": {
          "links": {
            "self": "/v1/customers/58b05b9853052f110010f7ee/klasses/orders"
          },
          "meta": {
            "kobject": true
          }
        }
      },
      "links": {
        "self": "/v1/customers/58b05b9853052f110010f7ee"
      }
    }
  ],
  "links": {
    "self": "/v1/customers/search?page=1&pageSize=100",
    "first": "/v1/customers/search?page=1&pageSize=100",
    "prev": null,
    "next": null,
    "last": "/v1/customers/search?page=1&pageSize=100"
  }
}


//then do klasses search
//klasses orders
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.kustomerapp.com/v1/klasses/orders",
  "method": "GET",
  "headers": {
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjM1MmQ4MGVmYjJiMTEwMDU2ODdmOCIsInVzZXIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIiLCJvcmciOiI1OGIwNWI3MDY4NGExMDExMDBhMTdlYmYiLCJvcmdOYW1lIjoienp6LWlzYWJlbGwiLCJ1c2VyVHlwZSI6Im1hY2hpbmUiLCJyb2xlcyI6WyJvcmcudXNlciIsIm9yZy5hZG1pbi5iaWxsaW5nIiwib3JnLmFkbWluIiwib3JnLmFkbWluLmNvbnRlbnQiLCJvcmcudHJhY2tpbmciLCJvcmcuYWRtaW4udXNlciIsIm9yZy5hZG1pbi5hcHBzIiwib3JnLmhvb2tzIl0sImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIifQ.N84SFmKeUvsYKk2C2Ry5_8svAzDXWAw8oYvYQjLLaWk"
  },
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

//response
{
  "meta": {
    "pageSize": 100,
    "page": 1
  },
  "data": [
    {
      "type": "kobject.order",
      "id": "58b05e02684a101100a184a0",
      "attributes": {
        "externalId": "09832402u0942",
        "title": "Order Number #09832402u0942",
        "description": "3 items purchased (Total: $339.98)",
        "icon": "tshirt-crew",
        "images": [
          "https://dl.dropboxusercontent.com/u/7062951/img_test/genesis-lightsabers.jpg",
          "http://img.costumecraze.com/images/vendors/rubies/882019-Deluxe-Kids-Chewbacca-Costume-large.jpg"
        ],
        "data": {
          "orderTitle": "Starwars Order",
          "orderTotal": "$338.98",
          "paymentMethod": "CreditCard",
          "deliveryDate": "Tue Feb 09 2016 19:39:23 GMT-0500 (EST)",
          "shippingNumber": "12038470329432",
          "orderDate": "Mon Feb 08 2016 18:39:19 GMT-0500 (EST)",
          "shippingAddress": "303 Broome St Apt 19 New York, NY 10002",
          "confirmationNumber": "09832402u0942",
          "orderDescription": "An amazing chewbacca costume to enjoy on any occasion",
          "lineItems": [
            {
              "quantity": "2",
              "title": "Chebacca Costume",
              "size": "large",
              "color": "N/A",
              "unitPrice": "$47.12",
              "image": "http://img.costumecraze.com/images/vendors/rubies/882019-Deluxe-Kids-Chewbacca-Costume-large.jpg"
            },
            {
              "quantity": "1",
              "title": "Light Saber",
              "size": "N/A",
              "color": "Blue",
              "unitPrice": "$244.74",
              "image": "https://dl.dropboxusercontent.com/u/7062951/img_test/genesis-lightsabers.jpg"
            }
          ]
        },
        "custom": {
          "orderTotalNum": 338.98,
          "trackingUrl": "https://www.fedex.com/apps/fedextrack/?tracknumbers=607737563977",
          "trackingNumStr": "607737563977",
          "orderNumStr": "09832402u0942"
        },
        "tags": [],
        "updatedAt": "2017-02-24T16:23:30.418Z",
        "createdAt": "2017-02-24T16:23:30.418Z",
        "rev": 0
      },
      "relationships": {
        "org": {
          "links": {
            "self": "/v1/orgs/58b05b70684a101100a17ebf"
          },
          "data": {
            "type": "org",
            "id": "58b05b70684a101100a17ebf"
          }
        },
        "klass": {
          "link": {
            "self": "/v1/klasses/order"
          },
          "data": {
            "type": "klass",
            "id": "order"
          }
        },
        "customer": {
          "links": {
            "self": "/v1/customers/58b05b9853052f110010f7ee"
          },
          "data": {
            "type": "customer",
            "id": "58b05b9853052f110010f7ee"
          }
        }
      },
      "links": {
        "self": "/v1/klasses/orders/58b05e02684a101100a184a0"
      }
    },
    {
      "type": "kobject.order",
      "id": "58b0606a53052f1100110018",
      "attributes": {
        "externalId": "09832402u0941",
        "title": "Order Number #09832402u0941",
        "description": "3 items purchased (Total: $339.98)",
        "icon": "tshirt-crew",
        "images": [
          "https://dl.dropboxusercontent.com/u/7062951/img_test/genesis-lightsabers.jpg",
          "http://img.costumecraze.com/images/vendors/rubies/882019-Deluxe-Kids-Chewbacca-Costume-large.jpg"
        ],
        "data": {
          "orderTitle": "Starwars Order",
          "orderTotal": "$338.98",
          "paymentMethod": "CreditCard",
          "deliveryDate": "Tue Feb 09 2016 19:39:23 GMT-0500 (EST)",
          "shippingNumber": "607737563977",
          "orderDate": "Mon Feb 08 2016 18:39:19 GMT-0500 (EST)",
          "shippingAddress": "303 Broome St Apt 19 New York, NY 10002",
          "confirmationNumber": "09832402u0941",
          "orderDescription": "An amazing chewbacca costume to enjoy on any occasion",
          "lineItems": [
            {
              "quantity": "2",
              "title": "Chebacca Costume",
              "size": "large",
              "color": "N/A",
              "unitPrice": "$47.12",
              "image": "http://img.costumecraze.com/images/vendors/rubies/882019-Deluxe-Kids-Chewbacca-Costume-large.jpg"
            },
            {
              "quantity": "1",
              "title": "Light Saber",
              "size": "N/A",
              "color": "Blue",
              "unitPrice": "$244.74",
              "image": "https://dl.dropboxusercontent.com/u/7062951/img_test/genesis-lightsabers.jpg"
            }
          ]
        },
        "custom": {
          "orderTotalNum": 338.98,
          "trackingUrl": "https://www.fedex.com/apps/fedextrack/?tracknumbers=607737563977",
          "trackingNumStr": "607737563977",
          "orderNumStr": "09832402u0942"
        },
        "tags": [],
        "updatedAt": "2017-02-24T16:33:46.112Z",
        "createdAt": "2017-02-24T16:33:46.112Z",
        "rev": 0
      },
      "relationships": {
        "org": {
          "links": {
            "self": "/v1/orgs/58b05b70684a101100a17ebf"
          },
          "data": {
            "type": "org",
            "id": "58b05b70684a101100a17ebf"
          }
        },
        "klass": {
          "link": {
            "self": "/v1/klasses/order"
          },
          "data": {
            "type": "klass",
            "id": "order"
          }
        },
        "customer": {
          "links": {
            "self": "/v1/customers/58b05b9853052f110010f7ee"
          },
          "data": {
            "type": "customer",
            "id": "58b05b9853052f110010f7ee"
          }
        }
      },
      "links": {
        "self": "/v1/klasses/orders/58b0606a53052f1100110018"
      }
    }
  ],
  "links": {
    "self": "/v1/klasses/orders?page=1&pageSize=100",
    "first": "/v1/klasses/orders?page=1&pageSize=100",
    "prev": null,
    "next": null
  }
}

