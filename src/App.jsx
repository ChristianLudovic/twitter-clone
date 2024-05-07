
import './App.css'
import { Footer } from './components/basis/footer'
import { SearchBar } from './components/basis/searchBar'
import { FollowList } from './components/layout/followList'
import { SideBar } from './components/layout/sideBar'
import { TrendingList } from './components/layout/trendingList'
import { Trends } from './components/layout/trends'

function App() {
  

  return (
    <>
    <div className='flex justify-between'>
      <SideBar />
      <Trends/>
    </div>
      
    </>
  )
}

export default App
