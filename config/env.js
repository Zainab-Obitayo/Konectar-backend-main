import dotenv from 'dotenv';
dotenv.config();

const config = Object.freeze({
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  COMMUNITY_LINK: process.env.COMMUNITY_LINK
});

export default config;