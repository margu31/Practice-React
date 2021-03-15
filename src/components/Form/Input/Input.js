import Icon from '../../Icon/Icon';

const Input = ({type, state, visible, children, shape}) => {

  return (
    <>
      <label htmlfor={type} className="offscreen">{`${children} 입력란`}</label>
      <input className="linetext" type={type} placeholder={children} id={type} name={type} />
      {type === 'password' ? <button type="button" className={`button ${shape}`}><Icon shape={shape}/></button> : ''}
    </>
  )
}

Input.defaultProps = {
  state: 'normal', 
  visible: 'default'
}

export default Input;
