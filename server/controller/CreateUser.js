import client from "../database/db.js";


const addUser = async(req, res) => {

    const { name, username, email, phone } = req.body;
 
        try {
            await client.query("set search_path to crud");
            await client.query(`insert into "mern" (p_name,p_username,p_email,p_phone) values($1,$2,$3,$4)`, [name, username, email, phone]);
            return true;
        } catch (error) {
            console.log("Error", error);
            return false

        } finally {
            console.log("Query Succesed");
        }



   
}
// module.exports = addUser
export default addUser