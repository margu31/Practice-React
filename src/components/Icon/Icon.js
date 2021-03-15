import { ReactComponent as Letter } from '../../assets/icons/shape=letter.svg';
import { ReactComponent as Lock } from '../../assets/icons/shape=lock.svg';
import { ReactComponent as Hide } from '../../assets/icons/shape=hide.svg';
import { ReactComponent as Show } from '../../assets/icons/shape=show.svg';

const Icon = ({shape}) => {
  switch (shape) {
    case 'letter': return <Letter />
    case 'lock': return <Lock />
    case 'hide': return <Hide />
    case 'show': return <Show />
    default: return '';
  }
}

export default Icon;
