import {
  FormGroup,
  TextField,
  Typography,
  styled,
  FormControl,
  Button,
} from "@mui/material";

import { useState } from "react";
import { addUser } from "../services/api";
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
const AddUser = () => {
  const [user, setuser] = useState(dataStorage);
  const onChangeHandler = (event) => {
    setuser({
      ...user,
      [event.target.name ]: event.target.value
    });

  };


  const onClickHandler = async(event)=>{

    await  addUser(user);
  }
  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={onChangeHandler}
          name="name"
        />
      </FormControl>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          onChange={onChangeHandler}
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
        />
      </FormControl>
      <FormControl>
        <TextField
          id="standard-basic"
          label="Phone"
          variant="standard"
          name="phone"
          onChange={onChangeHandler}
        />
      </FormControl>
      <FormControl>
        <ButtonColor variant="contained" onClick={onClickHandler}>Add User</ButtonColor>
      </FormControl>
    </Container>
  );
};

export default AddUser;
