import MenuBar from './components/menuBar/MenuBar'
import Header from './components/header/Header'
import SubHeader from './components/subHeader/SubHeader'
import FirstSection from './components/firstSection/FirstSection'
import Video from './components/video/Video'
import SecondSection from './components/secondSection/secondSection'
import Sponsor from './components/sponsors/Sponsor'
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="App">
{/* https://forms.gle/aDLUjdLWa7tAsDy8A */}
<MenuBar/>
<Header/>
<SubHeader/>
<FirstSection/>
<Video />
<SecondSection/>
<Sponsor />
<Footer />
    </div>
  );
}

export default App;
