// import logo from './logo.svg';
import './App.css';
import Banner from './Banner/Banner';
// import Certifacte from './Pages/Certificate/Certifacte';
import Education from './Pages/Education/Education';
import Experience from './Pages/Expreience/Experience';
import Footer from './Pages/Footer/Footer';
import Gallary from './Pages/Gallary/Gallary';
// import BANNER from './Pages/BANNER/BANNER.JS';
import Navebar from './Pages/Navebar/Navebar';
import Publications from './Pages/Publications/Publications';
import Skill from './Pages/Skilled/Skill';

function App() {
  return (
    <div className="App ">

      <div className='w-11/12 m-auto'>
        <Navebar></Navebar>

        <Banner></Banner>

        <Experience></Experience>

        <Education></Education>

        <Skill></Skill>

        <Publications></Publications>

        {/* <Certifacte></Certifacte> */}

        <Gallary></Gallary>
      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;
