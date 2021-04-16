import './component.css'
function Component(props){

    return(
       <div className='component'>
       <div className='icon'>
       <h2>{props.data.icon}</h2>
       </div>
       <div className='text'>
       
         <h3>{props.data.head}</h3>
         <p>{props.data.para}</p>
         </div>
         </div>
    );
}
export default Component;