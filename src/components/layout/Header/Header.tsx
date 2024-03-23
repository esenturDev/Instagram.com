import { useNavigate } from 'react-router';
import scss from './Header.module.scss';

export const Header = () => {
  const navigate =   useNavigate();
  function remove () {
    localStorage.removeItem('auth');
    navigate('/login')
  }
  return (
    <header>
      <div className="container">
        <div className={scss.content}>
          <button onClick={remove}>delete</button>
        </div>
      </div>
    </header>
  )
}
