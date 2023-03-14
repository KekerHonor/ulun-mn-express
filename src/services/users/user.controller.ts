import { NextFunction, Request, Response } from "express";
import { Connect, Query } from "../../config/mysql";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  console.log("Getting all users...");

  let query = "SELECT * FROM Users";

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


const createUser = (req: Request, res: Response, next: NextFunction) => {
    console.log("Creating User...");

    let { id, username, email, phone, password } = req.body;
    password = bcrypt.hashSync(password, salt)
    id = uuidv4();
    console.log("Hashed password: " + password);
    console.log("Generated id: " + id);
    let query = `INSERT INTO Users (id, username, phone, email, password) VALUES ('${id}', '${username}', '${phone}', '${email}', '${password}')`

    Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
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




export default { getUsers, createUser };
