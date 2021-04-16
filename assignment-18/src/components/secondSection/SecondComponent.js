function SecondComponent(props){
console.log(props.post)

    return(
        <div className='secondComponent'>
        <div className='dateCard'>
        <div className='day'>Apr</div>
        <div className='date'>7</div>
        </div>
<div>
<h2>{props.data.head}</h2>
<p>{props.data.para}</p>
</div>
        </div>
    );
}
export default SecondComponent;