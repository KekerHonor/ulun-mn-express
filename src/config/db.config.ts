import dotenv from 'dotenv'

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || "54.169.69.87";
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "ulun_mn";
const MYSQL_USER = process.env.MYSQL_USER || "rtd";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "Tiny722$";

const MYSQL = {
  host: MYSQL_HOST,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
}



const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT
}

const config = {
  mysql: MYSQL,
  // server: SERVER
}

export default config;