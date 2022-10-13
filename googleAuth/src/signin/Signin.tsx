import { GoogleLogo } from 'phosphor-react'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../firebase/Firebase'
import { useState } from 'react'

const Signin = () => {

  const [User, setUser] = useState<User>({} as User)

  function handleGoogleAuth(){
     const provider = new GoogleAuthProvider()

     signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user)
      })
      .catch(error => {
        console.log(error)
      })
     
  }


  return (
    <div className='flex flex-col gap-4'>
      <div>
        {User.photoURL &&  <img src={User.photoURL} />}
        <h1>{User.displayName}</h1>
      </div>
      <h2 className='mx-auto text-3xl text-slate-200 font-bold'>Acesse sua conta</h2>
      <button className='flex items-center gap-3 px-4 p-2 border-4 border-teal-500 text-teal-300 bg-slate-900 font-extrabold'
      onClick={handleGoogleAuth}>
        <GoogleLogo size={30}  />
        Conecte-se com o google
      </button>
    </div>
  )
}

export default Signin