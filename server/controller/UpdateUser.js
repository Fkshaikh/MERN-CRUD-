import client from "../database/db.js"
const updateUser = async(req,res) =>{
    try {
        const { name, username, email, phone } = req.body;
        console.log(name);
        const id = req.params['id']
        await client.query("set search_path to crud");

        await client.query(`UPDATE "mern" SET p_name = '${name}', p_username = '${username}', p_email = '${email}',p_phone = '${phone}'WHERE id= ${id};`)

        res.status(200).send("Data Updated")
    } catch (error) {
        res.status(409).send("Error in Updating Data"+error)

        console.log("Error While Updating Data");
        
    }

}

// `UPDATE "mern"SET p_name = ${name}, p_username = ${username}, p_email = ${email},p_phone = ${phone},WHERE id= ${id};`
export default updateUser