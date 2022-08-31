import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age={4} hasPet /> 
      
      <PetInfo animal="dog" age={7} hasPet={false} />
    </div>
  )
}
// тут мы также передаем значение hasPet как строку
// и вследстиии т.к. строка непустая это true, а пустоая это false
// тут мы передаем свойство animal со значение cat компоненту PetInfo
export default App
