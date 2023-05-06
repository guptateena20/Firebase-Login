import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { signUp } = useUserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await signUp(email, password)
            navigate("/")
        }
        catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <div className="login_form_div">
                <h2>Firebase Auth SignUp</h2>
                <div className='login_form'>
                    {error && <h3>{error}</h3>}
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                        <div className='btn_div'>
                            <button>SignUp</button>
                        </div>
                        <h4>Already have an Account ? <NavLink to="/">LogIn</NavLink></h4>
                    </form>
                </div>
            </div>


        </>
    )
}

export default SignUp