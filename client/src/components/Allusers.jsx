import { Table,TableBody,TableCell,TableHead, TableRow,styled, Button} from "@mui/material"
import { getUser ,DeleteUser} from "../services/api"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
const StyleTable = styled(Table)`
    width:90%;
    margin:50px auto 0 auto

`;
const StyledRow = styled(TableRow)`

    background:#67001a;
    & > th{
        color:#fff;
        font-size:18px;
    }
   

`;

const StyledCell = styled(TableRow)`
   
&>td{
font-size:15px;
}
`;



const Alluser =() =>{

    useEffect(()=>{
        LoadPage()

    },[]);
    const [user, setuser] = useState([]);
    const LoadPage = async() =>{
      let fetchedData =  await getUser()
      setuser(fetchedData.data)

    
    }

    const onDeleteUser = async(id) =>{
        await DeleteUser(id)
        LoadPage()
    }
    return(
       <StyleTable>
        <TableHead>
            <StyledRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>UserName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell> </TableCell>
            </StyledRow>
        </TableHead>
      <TableBody>
        {
            user.map(map =>(
                <StyledCell key={map.id}>
                    <TableCell >{map.id}</TableCell>
                    <TableCell>{map.p_name}</TableCell>
                    <TableCell>{map.p_username}</TableCell>
                    <TableCell>{map.p_email}</TableCell>
                    <TableCell>{map.p_phone}</TableCell>
                    <TableCell>
                    <Button component ={Link} to={`/edit/${map.id}`}>Edit</Button>
                    <Button onClick={()=>onDeleteUser(map.id)}>Delete</Button>
                    </TableCell>
                </StyledCell>
            ))
        }
      </TableBody>
       </StyleTable>
    )
}
export default Alluser