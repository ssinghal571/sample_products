const assert = require('assert');
const mysql = require('mysql');

class Product {
    constructor() {
        // Mysql connection will be created when, an object of this class will be created
        const conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Mysql1234@",
            database: "nodejs"
        });
        conn.connect(function (err) {
            if (err) throw err;
        });

        this.conn = conn;
    }
    // getProducts(pageNumber, numberOfRecords){
    //
    //     if(pageNumber){
    //         assert(Number.isInteger(pageNumber) && pageNumber > 0);
    //     } else {
    //         pageNumber = 1;
    //     }
    //
    //     if(numberOfRecords){
    //         assert(Number.isInteger(numberOfRecords) && numberOfRecords > 0);
    //     } else {
    //         numberOfRecords = 10;
    //     }
    //     const recordsToSkip = (pageNumber - 1) * numberOfRecords;
    //     const sQuery = `select * from products limit ${recordsToSkip}, ${numberOfRecords}`;
    //     const that = this;
    //     return new Promise( ( resolve, reject ) => {
    //         that.conn.query( sQuery, function( err, rows ) {
    //             if ( err )
    //                 return reject( err );
    //             resolve( rows );
    //         } );
    //     } );
    // }

    getProducts(){
        const sQuery = `select * from products`;
        const that = this;
        return new Promise( ( resolve, reject ) => {
            that.conn.query( sQuery, function( err, rows ) {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }

    addNewProduct(productData){
       const sQuery = `insert into products(ProductName, SupplierID, CategoryID, unit, Price, quantity) values(
            '${productData.ProductName}', ${productData.SupplierID}, ${productData.CategoryID}, '${productData.unit}' ,
            ${productData.Price}, ${quantity})`;
        const that = this;
        return new Promise(function (resolve, reject) {
            that.conn.query(sQuery, function (err, resultSet) {
                if(err) return reject(err);
                resolve();
            });
        });
    }

    deleteProduct(productId){

        if(!Number.isInteger(productId)){
            productId = parseInt(productId);
        }
        const sQuery = `delete from products where id = ${productId}`;
        const that = this;
        return new Promise(function(resolve, reject){
             that.conn.query(sQuery, function (err, result) {
                if (err) return reject(err);
                resolve();
             })
        });
    }

    updateProduct(productData){
       const sQuery = `update products set ProductName = '${productData.ProductName}',
            SupplierID = ${productData.SupplierID}, CategoryID = ${productData.CategoryID},
             unit = '${productData.unit}', Price = ${productData.Price}, quantity = ${quantity}
             where id = ${productData.id}`;
        const that = this;
        return new Promise(function (resolve, reject) {
            that.conn.query(sQuery, function (err, result) {
                if(err) return reject(err);
                const query = `select * from products where id = ${productData.id}`;
                that.conn.query(query, function (err, result) {
                    if(err) return reject(err);

                    resolve(result);
                });

            })
        });


    }
}

module.exports = Product;