import './Home.css'



import { Hero,BestDownloads,GamingLibrary,GamingLibraryCard } from './components/export';



const Home = () => {
  return (
    <>
        <Hero/>
        <BestDownloads/>
        <GamingLibrary/>
        <GamingLibraryCard/>
        <GamingLibraryCard/>
        <GamingLibraryCard/>
        <GamingLibraryCard/>

    </>
  )
}

export default Home