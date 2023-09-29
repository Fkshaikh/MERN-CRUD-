import client from "../database/db.js"

const findUser = async(req,res) =>{

    try {
        const id = req.params["id"]
        await client.query("set search_path to crud");
        await client.query(`Select * from mern where id =${id}`).then(fetch =>{
            res.status(200).json(fetch.rows)
        })

    } catch (error) {
        res.status(404).json("Data Not Found")
        
    }

}

export default findUser