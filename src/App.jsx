import StatesGrid from './components/StatesGrid'
import OperatorPanel from './components/OperatorPanel'

function App() {
  return (
    <div className="bg-violet-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center p-6">PackML States</h1>
      <StatesGrid />
      <OperatorPanel />
    </div>
  )
}

export default App
