// import MyContext from '../counter';
import {MyContext} from '../counter';

export default function CountButton({children}) {
  return (
    <MyContext.Consumer >
      {
        (context) => {
          // console.log(context);
          const {dispatch} = context;

          return (
            <button 
              type="button" 
              onClick={() => {
                // console.log(children);
                dispatch({type: children === '감소' ? 'decrease' : 'increase'})
              }}
            >
              {children}
            </button>
          )
        }
      }
    </MyContext.Consumer>
  )
}