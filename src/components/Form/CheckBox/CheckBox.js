
const CheckBox = ({className, children}) => {
  return (
    <>
      <input type="checkbox" id={className} name={className}/>
      <label htmlfor={className}>{children}</label>
    </>
  )
}

export default CheckBox;
