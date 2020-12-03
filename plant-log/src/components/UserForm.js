import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserModel from '../models/user';

const UserForm = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = {
      username: name,
      email: email,
    }
    UserModel.addUser(temp).then((res)=>{
      console.log(res);
      history.push('/users')
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
      <button type='submit' className='btn btn-primary userForm'>Submit</button>
    </form>
  )
}