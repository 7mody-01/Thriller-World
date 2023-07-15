import { BrowserRouter as Route,Router,Routes } from 'react-router-dom';
import './App.css'; 
// import {Home} from './compo/nents/Pages/exxport'
import { Header,Footer,Container,Hero,BestDownloads,GamingLibrary,GamingLibraryCard} from './components/export';


const App = () => {
  return (
      <>
      {/* <Router> */}
        <Header />
            <Container> 
                {/* <Routes> */}
                        <Hero/>
                        <BestDownloads/>
                        <GamingLibrary/>
                        <GamingLibraryCard/>
                        <GamingLibraryCard/>
                        <GamingLibraryCard/>
                        <GamingLibraryCard/>
                        {/* <Route path='/' element={<BestDownloads/>}  /> */}
                  <Container> 
                        <BestDownloads/>
                        <GamingLibrary/>
                        <GamingLibraryCard/>
                        <GamingLibraryCard/>
                        <GamingLibraryCard/>
                        <GamingLibraryCard/>
                  </Container>
                {/* </Routes> */}
            </Container>
            {/* // </Router> */}

            <Footer/>
  
        

      </>
          )
}

export default App