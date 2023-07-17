paypal.Buttons({
    createOrder: function(data, actions) {
        // Set up the transaction details here, e.g. the total price
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: amountElement.value,
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        // Handle the transaction completion here
        return actions.order.capture().then(function(details) {
            // Show a success message
            alert('Transaction completed by ' + details.payer.name.given_name);
        });
    }
}).render('#paypal');