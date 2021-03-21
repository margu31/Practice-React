import { ReactComponent as LogoImg } from '../../assets/DisneyLogo.svg';
import { headerLogo } from './Logo.module.scss';

const Logo = () => {
  return (
    <h1 className={headerLogo}>
      <LogoImg />
    </h1>
  )
}

export default Logo;