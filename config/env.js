import dotenv from 'dotenv';
dotenv.config();

const config = Object.freeze({
  PORT: process.env.PORT,
  PG_PASS: process.env.PG_PASS,
  DBNAME: process.env.DBNAME,
  PG_USER: process.env.PG_USER,
  PG_PORT: process.env.PORT,
  COMMUNITY_LINK: process.env.COMMUNITY_LINK
});

export default config;