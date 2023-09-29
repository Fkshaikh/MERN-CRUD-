
import client from "../database/db.js";

const fetchUser = async(req, res) => {


        try {
            
            await client.query("set search_path to crud");
            await client.query('SELECT * FROM mern').then(fetch => {

                res.status(200).json(fetch.rows)
                

            })
            return "Data Fetched";
        } catch (error) {
            console.log("Error", error);
            res.status(404).json({ message: "Data Not Found" });
            return "Data Not Found"

        }


}
export default fetchUser
