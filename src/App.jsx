
import './App.css'
import { Footer } from './components/basis/footer'
import { PageTitle } from './components/basis/pageTitle'
import { SearchBar } from './components/basis/searchBar'
import { TweetEditor } from './components/basis/tweetEditor'
import { FollowList } from './components/layout/followList'
import { SideBar } from './components/layout/sideBar'
import { TrendingList } from './components/layout/trendingList'
import { Trends } from './components/layout/trends'
import { TweetContainer } from './components/layout/tweets'

function App() {
  

  return (
    <>
      <div className='flex justify-center gap-[30px]'>
        <div className='flex'>
          <SideBar/>
          <div className='max-w-[600px]'>
            <PageTitle/>
            <TweetEditor/>
            <TweetContainer/>
          </div>
        </div>
        
        <Trends/>
      </div>
      

      
    </>
  )
}

export default App
