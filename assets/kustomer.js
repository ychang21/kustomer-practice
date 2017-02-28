//variables to store the information needed from response JSON ajax calls
  var customerInfo = {};
  var orderInfo = {};
//variables for toggling table when clicking on order number
  var clicked = false;
  $('inner-table').hide();

  function loadContext() {
    //grab data for matt chabrier using API
    var customer = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.kustomerapp.com/v1/customers/email=matt@kustomer.com",
        "method": "GET",
        "headers": {
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjM1MmQ4MGVmYjJiMTEwMDU2ODdmOCIsInVzZXIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIiLCJvcmciOiI1OGIwNWI3MDY4NGExMDExMDBhMTdlYmYiLCJvcmdOYW1lIjoienp6LWlzYWJlbGwiLCJ1c2VyVHlwZSI6Im1hY2hpbmUiLCJyb2xlcyI6WyJvcmcudXNlciIsIm9yZy5hZG1pbi5iaWxsaW5nIiwib3JnLmFkbWluIiwib3JnLmFkbWluLmNvbnRlbnQiLCJvcmcudHJhY2tpbmciLCJvcmcuYWRtaW4udXNlciIsIm9yZy5hZG1pbi5hcHBzIiwib3JnLmhvb2tzIl0sImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIifQ.N84SFmKeUvsYKk2C2Ry5_8svAzDXWAw8oYvYQjLLaWk"
            },
        "data": "{}"
        };

        $.ajax(customer).done(function (response) {
            console.log(response);
            //reassigning customerInfo with reponse JSON
            customerInfo = response;
        });
    //from the data gathered about Matt Chabrier we know that his order id is called orders. We can use that to make an api call to klasses/orders.
    var order = {
          "async": true,
          "crossDomain": true,
          "url": "https://api.kustomerapp.com/v1/klasses/orders",
          "method": "GET",
          "headers": {
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjM1MmQ4MGVmYjJiMTEwMDU2ODdmOCIsInVzZXIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIiLCJvcmciOiI1OGIwNWI3MDY4NGExMDExMDBhMTdlYmYiLCJvcmdOYW1lIjoienp6LWlzYWJlbGwiLCJ1c2VyVHlwZSI6Im1hY2hpbmUiLCJyb2xlcyI6WyJvcmcudXNlciIsIm9yZy5hZG1pbi5iaWxsaW5nIiwib3JnLmFkbWluIiwib3JnLmFkbWluLmNvbnRlbnQiLCJvcmcudHJhY2tpbmciLCJvcmcuYWRtaW4udXNlciIsIm9yZy5hZG1pbi5hcHBzIiwib3JnLmhvb2tzIl0sImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIifQ.N84SFmKeUvsYKk2C2Ry5_8svAzDXWAw8oYvYQjLLaWk"
          },
          "data": "{}"
        };

    $.ajax(order).done(function (response) {
        console.log(response);
        //reassigning orderInfo with response JSON
        orderInfo = response;
    });
    // Kustomer.initialize is required for card visibility in panel.
    Kustomer.initialize(function(orderInfo) {
            //variables for the JSON information needed about Matt Chabrier and his order
            var orderNum = orderInfo.data[0].attributes.externalId;
            var date = orderInfo.data[0].data.orderDate;
            var total = orderInfo.data[0].data.orderTotal;
            var item1 = orderInfo.data[0].data.lineItems[0].title;
            var item1Options = orderInfo.data[0].data.lineItems[0].color + " / " +orderInfo.data[0].data.lineItems[0].size;
            var item1Quantity = orderInfo.data[0].data.lineItems[0].quantity;
            var item1Price = orderInfo.data[0].data.lineItems[0].unitPrice;
            var item2 = orderInfo.data[0].data.lineItems[1].title;
            var item2Options = orderInfo.data[0].data.lineItems[1].color + " / " +orderInfo.data[0].data.lineItems[1].size;
            var item2Quantity = orderInfo.data[0].data.lineItems[1].quantity;
            var item2Price = orderInfo.data[0].data.lineItems[1].unitPrice;
            // if order exists then proceed with appending the information to the proper table values
            if (orderNum) {
                var a = document.createElement('a');
                var linkText = document.createTextNode("Order # " + orderNum);
                a.appendChild(linkText);
                a.title = "Order #";
                a.id = "orderLink";
                a.href = "#";
                document.getElementById("num").appendChild(a);
                $('#date').append(date);
                $('#total').append(total);
                $('#inner-table').append("<tr><td>" + item1 + "</td><td>" + item1Options + "</td><td>" + item1Quantity + "</td><td>" + item1Price + "</td></tr>");
                $('#inner-table').append("<tr><td>" + item2 + "</td><td>" + item2Options + "</td><td>" + item2Quantity + "</td><td>" + item2Price + "</td></tr>");
                } else {
                  //close the card if no order present for particular customer
                    Kustomer.close();
                }
            //hide and show inner table that contains item, options, quantity, and price depending on user clicking on order number
            $('#orderLink').on(click, function (){
                if (clicked === false){
                  $('#inner-table').show();
                  clicked = true;
                } else {
                  $('#inner-table').hide();
                  clicked = false;
                }
            });

      //this is the first step to install the card with Post /v1/cards.available
    
      var firstCard = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.kustomerapp.com/v1/v1/cards/available",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjM1MmQ4MGVmYjJiMTEwMDU2ODdmOCIsInVzZXIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIiLCJvcmciOiI1OGIwNWI3MDY4NGExMDExMDBhMTdlYmYiLCJvcmdOYW1lIjoienp6LWlzYWJlbGwiLCJ1c2VyVHlwZSI6Im1hY2hpbmUiLCJyb2xlcyI6WyJvcmcudXNlciIsIm9yZy5hZG1pbi5iaWxsaW5nIiwib3JnLmFkbWluIiwib3JnLmFkbWluLmNvbnRlbnQiLCJvcmcudHJhY2tpbmciLCJvcmcuYWRtaW4udXNlciIsIm9yZy5hZG1pbi5hcHBzIiwib3JnLmhvb2tzIl0sImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIifQ.N84SFmKeUvsYKk2C2Ry5_8svAzDXWAw8oYvYQjLLaWk"
        },
        "processData": false,
        "data": "{\"name\":\"mc-card\",\"description\":\"Customer order with 3 items totaling $339.98\",\"url\":\"https://fathomless-falls-84153.herokuapp.com/\",\"contexts\":[\"conversation\",\"customer\",\"kobject\"]}"
      }

      $.ajax(firstCard).done(function (response) {
        console.log(response);
      });

    //this is the second step to install the card with Post /v1/cards/available/{id}/install
    //this should post the card into the kustomer software barring any issues
      var secondCard = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.kustomerapp.com/v1/v1/cards/available/58b05e02684a101100a184a0/install",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjM1MmQ4MGVmYjJiMTEwMDU2ODdmOCIsInVzZXIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIiLCJvcmciOiI1OGIwNWI3MDY4NGExMDExMDBhMTdlYmYiLCJvcmdOYW1lIjoienp6LWlzYWJlbGwiLCJ1c2VyVHlwZSI6Im1hY2hpbmUiLCJyb2xlcyI6WyJvcmcudXNlciIsIm9yZy5hZG1pbi5iaWxsaW5nIiwib3JnLmFkbWluIiwib3JnLmFkbWluLmNvbnRlbnQiLCJvcmcudHJhY2tpbmciLCJvcmcuYWRtaW4udXNlciIsIm9yZy5hZG1pbi5hcHBzIiwib3JnLmhvb2tzIl0sImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1OGIzNTJkODY4NGExMDExMDBhNTAxZTIifQ.N84SFmKeUvsYKk2C2Ry5_8svAzDXWAw8oYvYQjLLaWk"
        },
        "processData": false,
        "data": "{\"contexts\":[\"customer\",\"conversation\"]}"
      }

      $.ajax(secondCard).done(function (response) {
        console.log(response);
      });
    });
}

  loadContext();

