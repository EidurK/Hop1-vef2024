import pg from 'pg';

const{DATABASE_URL: connectionString } = process.env;

if(!connectionString){
  console.error('DATABASE_URL missing in .env');
  process.exit(-1);
}

const pool = new pg.Pool({connectionString});

pool.on('error', (err) => {
  console.error('Villa í tengingu við gagnagrunn, forrit hættir', err);
  process.exit(-1);
});

/**
 * Wraps a query to the database, will not throw.
 *
 * @param {string} q Query to perform
 * @param {string[]} values Parameterized values
 * @returns Query result or null if error
 */
export async function query(q, values = []) {
  let client;
  try {
    client = await pool.connect();
  } catch (e) {
    console.error('unable to get client from pool', e);
    return null;
  }

  try {
    const result = await client.query(q, values);
    return result;
  } catch (e) {
    console.error('unable to query', e);
    return null;
  } finally {
    client.release();
  }
}
export async function singleQuery(_query, values = []) {
  const result = await query(_query, values);
  if (result && result.rows && result.rows.length === 1) {
    return result.rows[0];
  }

  return null;
}

export async function end(){
  await pool.end();
}
