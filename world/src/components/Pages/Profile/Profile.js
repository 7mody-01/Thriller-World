import './Profile.css'


import { Hero,BestDownloads,GamingLibrary,GamingLibraryCard,Container } from './components/export';
import { Profile } from '../exxport';



const Profile = () => {
  return (
        <>
          <Container> 
               <Hero/>
               <BestDownloads/>
               <GamingLibrary/>
               <GamingLibraryCard/>
               <GamingLibraryCard/>
               <GamingLibraryCard/>
               <GamingLibraryCard/>
          </Container>
        </>
  )
}

export default Profile