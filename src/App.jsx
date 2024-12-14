import Footer from './Components/Footer/footer';
import List from './Components/List/list';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <div className='bg-[#060610] h-svh w-full px-[30%] flex flex-col'>
        <Navbar />
        <div className='flex-1 overflow-y-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <List />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App;
