
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AllRoutes } from './routes/AllRoutes'
import { Footer, Header } from './components' 



function App() {
  

  return (
    <>
      <div className='mx-auto max-w-screen-xl p-4'>
      
    <Header/>
    <AllRoutes/>
    <Footer/>
   
      </div>
      
    </>
  )
}

export default App
