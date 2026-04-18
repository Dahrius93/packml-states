import StatesGrid from './components/StatesGrid'
import OperatorPanel from './components/OperatorPanel'
import ConveyorBelt from './components/ConveyorBelt'

function App() {
  return (
    <div className="bg-violet-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-center p-4 sm:p-6">PackML States</h1>
      <StatesGrid />
      <ConveyorBelt />
      <OperatorPanel />
    </div>
  )
}

export default App
