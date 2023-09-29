import client from "../database/db.js"

const DeleteUser = async(req,res) =>{

    try {
        const id = req.params['id'];
        console.log(id);
        await client.query("set search_path to crud");
        await client.query(`Delete  from mern where id =${id}`)
        res.status(200).json({message:"User Deleted"})

    } catch (error) {
        res.status(404).send(error)
        console.log(error);
        
    }

}

export default DeleteUser