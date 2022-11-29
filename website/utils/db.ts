import pg from 'pg';

const pool = new pg.Pool({
    host: process.env.NEXT_PUBLIC_HOST || 'localhost',
    user: process.env.NEXT_PUBLIC_DB_USER || 'postgres',
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    port: Number(process.env.NEXT_PUBLIC_DB_PORT) || 5432,
    database: process.env.NEXT_PUBLIC_DB_NAME
})
pool.connect((err:any)=>{
    if(err) return console.error(`Cannot connect to PostGress`,err);
    pool.query('SELECT NOW() AS "the TIME"', (err:any, res:any)=>{
            if(err) return console.error('error running query', err);
            console.log(`DB started ${res.rows[0]["the TIME"]}`);
    })
})

export default pool;