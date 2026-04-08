import { useState } from "react";

const Login = ({handleLogin}) => {

 
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail('')
    setPassword('')
    
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          required 
          className="border-2 text-black outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 py-3 px-5 text-xl rounded-full " type="email"
           placeholder="enter your email"
          />
          <input 
          value={password}
          onChange={(e)=>{
             setPassword(e.target.value);
          }}
          required 
          className="border-2 mt-5 text-black outline-none bg-transparent placeholder:text-gray-400 border-emerald-600 py-3 px-5 text-xl rounded-full " type="password" 
          placeholder="enter your password" 
          />
          <button className="border-2 text-white outline-none border-none placeholder:text-white bg-emerald-600 py-3 px-5 text-xl rounded-full mt-5">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login