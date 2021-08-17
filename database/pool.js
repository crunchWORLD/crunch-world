const { Pool } = require('pg');

const PG_URI = 'postgres://pjputbhw:0NVViIM6inhaueZBDXA5A7SGnRHVRUCU@chunee.db.elephantsql.com/pjputbhw';

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('db pool executed query ->', text);
    return pool.query(text, params, callback);
  }
};
