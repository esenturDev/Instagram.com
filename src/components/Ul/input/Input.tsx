import { FC } from 'react';
import scss from './Input.module.scss';
const Input: FC<{
  value: string;
  type: string;
  setData: (value: string) => void;
}> = ({value, type, setData}) => {
  return <input className={scss.inputs} type={type} value={value} onChange={(e) => setData(e.target.value)}/>
}

export default Input