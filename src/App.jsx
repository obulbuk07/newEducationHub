import './App.css'
import EducationHub from './pages/EducationHub'
import StudentGuide from './pages/StudentGuide'
import ContentPage from './pages/ContentPage'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div>
       <Routes>
          <Route path="/" element={<EducationHub/>}/>
          <Route path="/guide" element={<StudentGuide/>}/>
          <Route path="/content/:id" element={<ContentPage />} />
       </Routes>
    </div>
  )
}

export default App
