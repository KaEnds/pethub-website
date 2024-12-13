import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <h1 className="mt-12 pt-5 text-6xl font-bold text-black">
      <span className='text-orange'>welcome</span> pethub website
    </h1>
    <img className='my-10 mx-auto' src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="test image" width="500" height="600"/>
    <div className='w-3/5 mx-auto'>
      <h1 className='text-3xl text-left my-5'>heading</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, esse molestiae amet sit dolore perferendis voluptate quo cupiditate, fuga itaque pariatur soluta consequuntur ut deleniti unde quam fugiat aspernatur? Labore.</p>
    </div>

    
    </>
  )
}

export default App
