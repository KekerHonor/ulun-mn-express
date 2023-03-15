import { NextFunction, Request, Response } from "express";
import { Connect, Query } from "../../config/mysql";
import { v4 as uuidv4 } from "uuid";

const getProducts = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting all users...");

  let query = "SELECT * FROM Products";

  Connect()
    .then((connection) => {
      console.log("Connection successful")
      Query(connection, query)
        .then((results) => {
          console.log("Query successful:", results)
            return res.status(200).json({
                results
            })
        })
        .catch((error) => {
          console.log(error.message, error);

          return res.status(500).json({
            message: error.message,
            error,
          });
        });
    })
    .catch((error) => {
      console.log(error.message, error);

      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};


const createProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log("Creating Product...");

    let { id, name, price, vendor_name, vendorID, longitude, latitude, image, location } = req.body;
    id = uuidv4()
    let query = `INSERT INTO Products (id, name, price, vendor_name, vendorID, longitude, latitude, image, location) VALUES ('${id}', '${name}', '${price}', '${vendor_name}', '${vendorID}', '${longitude}', '${latitude}', '${image}', '${location}')`

    Connect()
    .then((connection) => {
    console.log("Connected succesfully")
      Query(connection, query)
        .then((results) => {
            console.log("Product successfully created")
            console.log("Query successful:", results)
            return res.status(200).json({
                results
            })
        })
        .catch((error) => {
          console.log(error.message, error);

          return res.status(500).json({
            message: error.message,
            error,
          });
        });
    })
    .catch((error) => {
      console.log(error.message, error);

      return res.status(500).json({
        message: error.message,
        error,
      });
    });

} 


const searchProducts_byName = (req: Request, res: Response, next: NextFunction) => {
    console.log("Getting products by name...");
  
    let query = "SELECT * FROM Products";
  
    Connect()
      .then((connection) => {
        console.log("Connection successful")
        Query(connection, query)
          .then((results) => {
            console.log("Query successful:", results)
              return res.status(200).json({
                  results
              })
          })
          .catch((error) => {
            console.log(error.message, error);
  
            return res.status(500).json({
              message: error.message,
              error,
            });
          });
      })
      .catch((error) => {
        console.log(error.message, error);
  
        return res.status(500).json({
          message: error.message,
          error,
        });
      });
  };
  

  const searchProducts_byPrice = (req: Request, res: Response, next: NextFunction) => {
    console.log("Getting products within a price range...");

    const { minPrice, maxPrice } = req.query;
  
    let query = `SELECT * FROM Products WHERE price BETWEEN ${minPrice} AND ${maxPrice} `;
    
  
    Connect()
      .then((connection) => {
        console.log("Connection successful")
        Query(connection, query)
          .then((results) => {
            console.log("Query successful:", results)
              return res.status(200).json({
                  results
              })
          })
          .catch((error) => {
            console.log(error.message, error);
  
            return res.status(500).json({
              message: error.message,
              error,
            });
          });
      })
      .catch((error) => {
        console.log(error.message, error);
  
        return res.status(500).json({
          message: error.message,
          error,
        });
      });
  };
  





export default { getProducts, createProduct, searchProducts_byPrice };
