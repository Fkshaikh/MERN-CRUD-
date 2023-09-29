import {FormGroup,TextField,Typography,styled,FormControl,Button,} from "@mui/material";

import { useState,useEffect} from "react";
import { addUser, findUser, updateUser } from "../services/api";
import {useParams} from "react-router-dom"
const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
      margin-top: 15px;
    }
  `;
  
const ButtonColor = styled(Button)`
    background-color: #67001a;
    &:hover {
      background-color: #a9a9a9;
    }
    &:focus {
      background-color: #67001a;
    }
  `;
  
  //Creating a object for Data Storage
  
const dataStorage = {
    name: " ",
    username: " ",
    email: " ",
    phone: " ",
};
const Edituser = () => {
    const [user, setuser] = useState(dataStorage);
  
    const {id} = useParams();

    useEffect(()=>{
        loadPage()
    },[])
    
    const loadPage = async()=>{
       let response =  await findUser(id)
       console.log(response.data);

       const [obj] = response.data
       console.log(obj.p_name);
        setuser({name : obj.p_name,username: obj.p_username,email:obj.p_email,phone:obj.p_phone})
     console.log(user);
    
       
    }
    const onClickEditHandler = async() =>{
      await updateUser(user,id)
      

    }
    const onChangeHandler = (event) => {
      setuser({
        ...user,
        [event.target.name ]: event.target.value
      });
  
    };
  
    return (
      <Container>
        <Typography variant="h4">Edit  User</Typography>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={onChangeHandler}
            value= {user.name}
            name="name"
            
          ></TextField>
        </FormControl>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            onChange={onChangeHandler}
            value= {user.username}

            name="username"
           
          />
        </FormControl>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            onChange={onChangeHandler}
            value= {user.email}

         
          />
        </FormControl>
        <FormControl>
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            onChange={onChangeHandler}
            value= {user.phone}

           
          />
        </FormControl>
        <FormControl>
          <ButtonColor variant="contained" onClick={onClickEditHandler}>Edit User</ButtonColor>
        </FormControl>
      </Container>
    );
  };
  
  export default Edituser;
  