import './main.css'
import Forms from './components/pages/forms'
import Contacts from './components/pages/contacts'
import Navbar from './components/layouts/Navbar'
import Flyers from './components/pages/flyers'
import Footer from './components/layouts/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
      <Flyers></Flyers>
      <Forms></Forms>
      <Contacts></Contacts>
    </>
  )
}

export default App
