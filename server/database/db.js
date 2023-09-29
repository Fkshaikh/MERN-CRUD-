import pkg from 'pg';
const { Client } = pkg;
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5433,
})

await client.connect()
export default client