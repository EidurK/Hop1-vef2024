import pg from 'pg';
const{DATABASE_URL: connectionString, NODE_ENV:nodeEnv} = process.env;
if(!connectionString){
  console.error('DATABASE_URL missing in .env');
  process.exit(-1);
}
