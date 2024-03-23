import { useNavigate } from 'react-router';
import scss from './LoginPages.module.scss';
import { useGetUsersQuery } from '../../../redux/api/auth';
import { useState } from 'react';
export const LoginPages = () => {
  const {data} =  useGetUsersQuery();
  // const [postLogin] =  usePostLoginMutation();
  const navigate =  useNavigate();

  const [email,setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("");


  const resultUsers = data?.find((item) => item.email === email && item.password === password);

  const handleLogin = async () => {
    // const newUsers = {
    //   email,
    //   password,
    // };
    if(resultUsers) {
      // await postLogin(newUsers);
      localStorage.setItem('auth', JSON.stringify(email))
      navigate('/')
    } else {
      alert("Пароль или Email не правильный!")
    }
  }

  return (
    <div className={scss.loginPages}>
      <div className="container">
        <div className={scss.content}>
          <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
            <button onClick={handleLogin}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}
