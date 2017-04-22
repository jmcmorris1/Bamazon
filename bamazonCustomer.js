var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jordan54",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    
});


//Shows Bamazon inventory
function showInventory() {
    connection.query('SELECT * FROM products', function(err, inventory) {
        if (err) throw err;
        console.log("Bamazon Inventory");
        for (var i = 0; i < inventory.length; i++) {
            console.log("Item ID: " + inventory[i].item_id + " | Product: " + inventory[i].product_name + " | Department: " + inventory[i].department_name + " | Price: " + inventory[i].price + " | Quantity: " + inventory[i].stock_quantity);
        }
        //Displays message to customer
        inquirer.prompt([

            {
                name: "item",
                type: "input",
                message: "What's the ID of the product you would like to buy?"
            },

            {
                name: "product",
                type: "input",
                message: "How many of this item would you like to buy?",
            }
        ]).then(function(order) {
      
            var quantity = order.quantity;
            var item_id = order.id;
            connection.query('SELECT * FROM products WHERE item_id=' + item_id, function(err, item_id) {
                if (err) throw err;
                if (selectedItem[0].stock_quantity - quantity >= 0) {
                    console.log("Quantity in Stock: ");
                    console.log("You will be charged " (order.quantity * selectedItem[0].price) + " dollars.");
                    
                    connection.query('UPDATE products SET stock_quantity=? WHERE id=?', [selectedItem[0].stock_quantity - quantity, item_id],
                        function(err, inventory) {
                            if (err) throw err;
                            showInventory();
                        });

                } else {
                    console.log("Insufficient quantity.");
                    showInventory();
                }
            });
        });
    });
}

showInventory();
