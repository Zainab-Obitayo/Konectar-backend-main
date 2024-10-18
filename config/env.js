import dotenv from 'dotenv';
dotenv.config();

const config = Object.freeze({
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  COMMUNITY_LINK: process.env.COMMUNITY_LINK
});

export default config;