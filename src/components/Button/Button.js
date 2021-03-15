
const Button = ({mode, state, children}) => {
  return (
    <button className={`button ${mode}-${state}`}>{children}</button>
  )
};

Button.defaultProps = {
  mode: 'primary',
  state: 'normal',
};

export default Button;