import './subHeader.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import headerImage from '../../assets/header-img.PNG';
function SubHeader(){
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  
  }
    return(
      <div className='subHeader'>
       
        <Slider {...settings} >
          <div className='slide1'>
            <div className='textSlide'>
            <h3>SheCodeAfrica Contributhon

</h3>
<p>The SheCodeAfrica Contributhon started April 1, 2021. Jenkins Project is mentoring women in Africa as they propose pull requests to improve Pipeline help and Pipeline examples. The participants include Onyinye Ezike, Sharon Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi

More info</p></div>

          </div>
          <div>
            <h3><img className='image' src={headerImage} alt='Header'/></h3>
          </div>
          <div className='textSlide'>
            <h3>SheCodeAfrica Contributhon

</h3>
<p>The SheCodeAfrica Contributhon started April 1, 2021. Jenkins Project is mentoring women in Africa as they propose pull requests to improve Pipeline help and Pipeline examples. The participants include Onyinye Ezike, Sharon Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi

More info</p>
          </div>
          <div>
            <img className='image' src={headerImage} alt='Header'/>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
     
    );


}
export default SubHeader;

