import Icon from '../../Icon/Icon';
import Input from '../Input/Input'

const SingninInput = ({type, shape, ...restProps}) => {
  return (
    <div className={`text-box input-${type}`}>
      {type === 'email' ? <Icon shape="letter" /> : <Icon shape="lock" />}
      <Input type={type} shape={shape} {...restProps}/>
    </div>
  )
}

export default SingninInput;
