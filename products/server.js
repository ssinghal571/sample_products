/**
 *
 * We shall use HTTP methods to interact with web client i.e. web browser, web client, front-end
 *
 * HTTP Methods:
 * 1. GET -> To get the data
 * 2. POST -> Create new record
 * 3. PUT -> Update record
 * 4. DELETE -> DELETE Record
 *
 * How to Test:
 * 1. Create a new Table named products in your database
 *       create table products
             (
             id int auto_increment
             primary key,
             ProductName varchar(100) not null,
             SupplierID int not null,
             CategoryID int not null,
             unit varchar(100) null,
             Price float not null,
             quantity int default 0 null
             );
 2. Insert some products into it.
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (1,'Madam ke hath',1,1,'10 boxes x 20 bags',18,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (2,'AChang',1,1,'24 - 12 oz bottles',19,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (3,'Aniseed Syrup',1,2,'12 - 550 ml bottles',10,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (4,'Chef Anton\'s Cajun Seasoning',2,2,'48 - 6 oz jars',22,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (5,'chef jghj',12,12,'12',12,6);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (6,'Grandma\'s Boysenberry Spread',3,2,'12 - 8 oz jars',25,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (7,'Uncle Bob\'s Organic Dried Pears',3,7,'12 - 1 lb pkgs.',30,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (8,'Northwoods Cranberry Sauce',3,2,'12 - 12 oz jars',40,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (9,'Mishi Kobe Niku',4,6,'18 - 500 g pkgs.',97,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (10,'Ikura',4,8,'12 - 200 ml jars',31,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (11,'Queso Cabrales',5,4,'1 kg pkg.',21,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (12,'Queso Manchego La Pastora',5,4,'10 - 500 g pkgs.',38,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (13,'Konbu',6,8,'2 kg box',6,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (14,'Tofu',6,7,'40 - 100 g pkgs.',23.25,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (15,'Genen Shouyu',6,2,'24 - 250 ml bottles',15.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (16,'Pavlova',7,3,'32 - 500 g boxes',17.45,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (17,'Alice Mutton',7,6,'20 - 1 kg tins',39,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (18,'Carnarvon Tigers',7,8,'16 kg pkg.',62.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (19,'Teatime Chocolate Biscuits',8,3,'10 boxes x 12 pieces',9.2,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (20,'Sir Rodney\'s Marmalade',8,3,'30 gift boxes',81,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (21,'Sir Rodney\'s Scones',8,3,'24 pkgs. x 4 pieces',10,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (22,'Gustaf\'s Knsckebrad',9,5,'24 - 500 g pkgs.',21,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (23,'Tunnbrad',9,5,'12 - 250 g pkgs.',9,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (24,'Guarana Fantastica',10,1,'12 - 355 ml cans',4.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (25,'NuNuCa Nua-Nougat-Creme',11,3,'20 - 450 g glasses',14,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (26,'Gumbar Gummibarchen',11,3,'100 - 250 g bags',31.23,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (27,'Schoggi Schokolade',11,3,'100 - 100 g pieces',43.9,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (28,'Rassle Sauerkraut',12,7,'25 - 825 g cans',45.6,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (29,'Tharinger Rostbratwurst',12,6,'50 bags x 30 sausgs.',123.79,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (30,'Nord-Ost Matjeshering',13,8,'10 - 200 g glasses',25.89,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (31,'Gorgonzola Telino',14,4,'12 - 100 g pkgs',12.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (32,'Mascarpone Fabioli',14,4,'24 - 200 g pkgs.',32,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (33,'Geitost',15,4,'500 g',2.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (34,'Sasquatch Ale',16,1,'24 - 12 oz bottles',14,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (35,'Steeleye Stout',16,1,'24 - 12 oz bottles',18,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (36,'Inlagd Sill',17,8,'24 - 250 g jars',19,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (37,'Gravad lax',17,8,'12 - 500 g pkgs.',26,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (38,'Cate de Blaye',18,1,'12 - 75 cl bottles',263.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (39,'Chartreuse verte',18,1,'750 cc per bottle',18,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (40,'Boston Crab Meat',19,8,'24 - 4 oz tins',18.4,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (41,'Jack\'s New England Clam Chowder',19,8,'12 - 12 oz cans',9.65,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (42,'Singaporean Hokkien Fried Mee',20,5,'32 - 1 kg pkgs.',14,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (43,'Ipoh coffee',20,1,'16 - 500 g tins',46,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (44,'Gula Malacca',20,2,'20 - 2 kg bags',19.45,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (45,'Ragede sild',21,8,'1k pkg.',9.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (46,'Spegesild',21,8,'4 - 450 g glasses',12,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (47,'Zaanse koeken',22,3,'10 - 4 oz boxes',9.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (48,'Chocolade',22,3,'10 pkgs.',12.75,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (49,'Maxilaku',23,3,'24 - 50 g pkgs.',20,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (50,'Valkoinen suklaa',23,3,'12 - 100 g bars',16.25,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (51,'Manjimup Dried Apples',24,7,'50 - 300 g pkgs.',53,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (52,'Filo Mix',24,5,'16 - 2 kg boxes',7,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (53,'Perth Pasties',24,6,'48 pieces',32.8,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (54,'Tourtiare',25,6,'16 pies',7.45,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (55,'Pata chinois',25,6,'24 boxes x 2 pies',24,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (56,'Gnocchi di nonna Alice',26,5,'24 - 250 g pkgs.',38,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (57,'Ravioli Angelo',26,5,'24 - 250 g pkgs.',19.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (58,'Escargots de Bourgogne',27,8,'24 pieces',13.25,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (59,'Raclette Courdavault',28,4,'5 kg pkg.',55,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (60,'Camembert Pierrot',28,4,'15 - 300 g rounds',34,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (61,'Sirop d\'arable',29,2,'24 - 500 ml bottles',28.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (62,'Tarte au sucre',29,3,'48 pies',49.3,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (63,'Vegie-spread',7,2,'15 - 625 g jars',43.9,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (64,'Wimmers gute Semmelknadel',12,5,'20 bags x 4 pieces',33.25,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (65,'Louisiana Fiery Hot Pepper Sauce',2,2,'32 - 8 oz bottles',21.05,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (66,'Louisiana Hot Spiced Okra',2,2,'24 - 8 oz jars',17,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (67,'Laughing Lumberjack Lager',16,1,'24 - 12 oz bottles',14,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (68,'Scottish Longbreads',8,3,'10 boxes x 8 pieces',12.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (69,'Gudbrandsdalsost',15,4,'10 kg pkg.',36,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (70,'Outback Lager',7,1,'24 - 355 ml bottles',15,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (71,'Flatemysost',15,4,'10 - 500 g pkgs.',21.5,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (72,'Mozzarella di Giovanni',14,4,'24 - 200 g pkgs.',34.8,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (73,'Rad Kaviar',17,8,'24 - 150 g jars',15,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (74,'Longlife Tofu',4,7,'5 kg pkg.',10,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (75,'Rhanbrau Klosterbier',12,1,'24 - 0.5 l bottles',7.75,0);
 INSERT INTO `` (`id`,`ProductName`,`SupplierID`,`CategoryID`,`unit`,`Price`,`quantity`) VALUES (76,'Lakkalikaari',23,1,'500 ml',18,0);

 3. Open models/Product.js file
 4. Change your database details in line# 8 to 11
 5. Run this file:
    In Webstrom: right click and choose Run
    command line: node server.js

 6. open http://localhost:8080/getproducts in your browser to test the GET request

 7. For POST, PUT and DELETE it is possible to send request via javascript.

 */




const http = require('http'); // we need this to accept web(http) request and send web(http) response
const url = require('url'); // we need this to work with urls coming in web request
const {parse} = require('querystring'); //we need this for parsing the parameters in GET type web request
const Product = require('./models/Product'); // This class to perform database operation

//start http server and accept requests on port#8080 (see line #63)
http.createServer(function (req, res) {

    //Once server is started and any request is recieved from Web-client (web browser) then code in this block will be
    //executed

    //Create an object of Product class to perform Product related DB operations
    // example: SELECT, INSERT, UPDATE and DELETE
    const oProduct = new Product();

    //Parsing the url from request recieved from client so that we can see
    // which url was requested. Example: http://localhost:8080/products
    const urlAttributes = url.parse(req.url, true);

    // if parsed pathname from request URL is /getproducts and request method is type GET
    // then we shall get all the products from database and convert to JSON
    // and send as web(http) response
    if (urlAttributes.pathname === '/getproducts' && req.method === 'GET') {

        // Here, I am calling getProducts method of Product class
        // which returns all the products stored in Database
        oProduct.getProducts().then(function (products) {
            // writeHead method with statusCode 200 tells that request was processed sucessfully
            // and {'Content-Type': 'text/JSON'} tells that returned data will be in JSON format
            res.writeHead(200, {'Content-Type': 'text/JSON'});
            //in the next line `JSON.stringify(products)`, it converts the Product data into JSON
            // res.end() // it sends the response
            res.end(JSON.stringify(products));
        });

    }

    // if parsed pathname from request URL is /addproduct and request method is type POST
    // then it means that we shall create a new Product
    else if (urlAttributes.pathname === '/addproduct' && req.method === 'POST') {


        let body = "";

        // this method will collect the data recieved from user in body variable
        req.on('data', function (chunk) {
            body += chunk.toString();
        });
        // once data is collected then this method will be called automatically
        // here we can use that data to insert a new product in database
        req.on('end', () => {
            // convert the data in `body` variable to `JSON` data
            var requestBody = parse(body);

            const ProductName = requestBody.ProductName;
            const SupplierID = requestBody.SupplierID;
            const CategoryID = requestBody.CategoryID;
            const unit = requestBody.unit;
            const  Price = requestBody.Price;
            const  quantity = requestBody.quantity;

            // we are calling the addNewProduct of Product class here
            // it store this data in database using INSERT query
            oProduct.addNewProduct({
                ProductName: ProductName,
                SupplierID: SupplierID,
                CategoryID: CategoryID,
                unit: unit,
                Price: Price,
                quantity: quantity
            }).then(function () {
                // once insert query is finished, we will tell web client that
                //record is create successfully with help of statusCode 201
                res.writeHead(201, {'Content-Type': 'text/JSON'});
                //we also send web-client that it was success
                res.end(JSON.stringify({success: 'OK'}));
            });
        });


    } else if (urlAttributes.pathname === '/deleteproduct' && req.method === 'DELETE') {

        //getting product ID from web request
        const productId = urlAttributes.query.productId;

        //calling delete method of Product class to execute DELETE Query
        oProduct.deleteProduct(productId).then(function () {

            // once product is deleted, we'll send the response is ok and statusCode 200
            res.writeHead(200, {'Content-Type': 'text/JSON'});
            res.end(JSON.stringify({success: 'OK'}));
        });

    } else if (urlAttributes.pathname === '/updateproduct' && req.method === 'PUT') {


        let body = "";

        // this method will collect the data recieved from user in body variable
        req.on('data', function (chunk) {
            body += chunk.toString();
        });
        // once data is collected then this method will be called automatically
        // here we can use that data to update the product in database
        req.on('end', () => {
            // convert the data in `body` variable to `JSON` data
            var requestBody = parse(body);
            const id = requestBody.productID;
            const ProductName = requestBody.ProductName;
            const SupplierID = requestBody.SupplierID;
            const CategoryID = requestBody.CategoryID;
            const unit = requestBody.unit;
            const  Price = requestBody.Price;
            const  quantity = requestBody.quantity;

            // we are calling the updateProduct of Product class here
            // it will update the existing product in database
            oProduct.updateProduct({
                id: id,
                ProductName: ProductName,
                SupplierID: SupplierID,
                CategoryID: CategoryID,
                unit: unit,
                Price: Price,
                quantity: quantity
            }).then(function () {
                // once UPDATE query is finished, we will tell web client that
                //record is updated successfully with help of statusCode 200
                res.writeHead(200, {'Content-Type': 'text/JSON'});
                //we also send web-client that it was success
                res.end(JSON.stringify({success: 'OK'}));
            });
        });

    } else {
        // if the request url is unknown, then we simply return the 404 (Page not found error)
        res.writeHead(404);
        res.end();
    }


}).listen(8080); //accepting web(http) requests on port#80
console.log("Server started successfully")