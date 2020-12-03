import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserModel from '../models/User';

const UserForm = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = {
      username: username,
      email: email,
    }
    UserModel.addUser(temp).then((res)=>{
      console.log(res.id);
      history.push('/plants')
    })
  }
  const nameChange = (event) => {
    setName(event.target.value);
  }
  const emailChange = (event) => {
    setEmail(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange = {nameChange}
        className='userForm'
        type='text'
        placeholder='Enter Username'/>
      <input onChange = { emailChange }
        className='userForm'
        type='text'
        placeholder='Enter Email'/>
      <button type='submit' className='btn btn-success userForm'>Submit</button>
    </form>
  )
}

export default UserForm;