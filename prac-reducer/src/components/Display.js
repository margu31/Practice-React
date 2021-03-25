import {MyContext} from '../counter';

export default function Display() {
    // <div>{children}</div>
  return (
    <MyContext.Consumer>
      {
        (context) => {
          // console.log(context)
          return <div>{context.count}</div>
          // return <div>{context.count}</div>
        }
      }
    </MyContext.Consumer>
  )
}