import Input from './Components/Input/input';
import List from './Components/List/list';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <div className='bg-[#060610] w-full h-screen px-[30%] '>
      <Navbar />
      <Input />
      <List />
    </div>
  )
}

export default App
