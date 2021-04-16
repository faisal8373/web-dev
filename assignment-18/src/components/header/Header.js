// import Container from '@material-ui/core/Container';
import '../menuBar/menuBar.css';
import header_img from '../../assets/header-img.PNG';
import Button from '@material-ui/core/Button';


function Header(){
   
return(
    <div className='header'>
    <div className='header-text'>
<h1> Jenkins </h1>
<b>Build great things at any scale</b>

<p>The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
</p>
<div className='headerBtn'>
<Button variant="contained" >
 Documentation
</Button>
</div>
<div>
<Button variant="contained" color="secondary">
  Download
</Button>
</div>
</div>
<div className='header-img'>
    <img src={header_img}/>
</div>

</div>
);
}
export default Header;