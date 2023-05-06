import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {
  const {user, logOut} = useUserAuth()

  const handleLogout = async() => {
    try{
      await logOut()
    }
    catch(error){
      console.log(error.message);
    }
  }

  return (
    <>
      <div className='login_form_div another_class'>
        <h2>Welcome!
          <br/>
          <span style = {{color : "	#182c25", margin : "20px"}}>{user.email}</span>
        </h2>
        <div className='btn_div btn'>
          <button onClick = {handleLogout}>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Home  