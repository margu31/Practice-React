/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as ColorLogo } from '../../assets/Logo.svg';
import { ReactComponent as MonoLogo } from '../../assets/type=mono.svg';
import { ReactComponent as BlackLogo } from '../../assets/type=black.svg';

const Logo = ({type, children}) => {
  return (
    <>
      <h1 className="offscreen">{children}</h1>
      <a href="#" className="color-logo">
        {type === 'colorful' ? <ColorLogo /> : type === 'mono' ? <MonoLogo /> : <BlackLogo />}
      </a>
    </>
  )
}

export default Logo;



