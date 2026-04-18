import { states } from '../data/states'
import State from './State'
import { useSelector } from 'react-redux'

const StatesGrid = () => {
  const { activeState } = useSelector((state) => state.state)

  return (
    <div className="flex items-center justify-center mx-2 sm:mx-6">
      <div
        className="w-full max-w-4xl grid gap-2 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6 bg-gray-100 border-2 border-slate-500 rounded-lg mt-6 sm:mt-12"
        style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
      >
        {states.map((state) => (
          <div
            key={state.id}
            style={{ gridColumn: state.col, gridRow: state.row }}
          >
            <State
              name={state.name}
              color={state.color}
              activeState={activeState}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatesGrid
