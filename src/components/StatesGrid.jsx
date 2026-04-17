import { states } from '../data/states'
import State from './State'

const StatesGrid = () => {
  return (
    <div
      className="grid gap-4 p-6"
      style={{ gridTemplateColumns: 'repeat(5, minmax(120px, 1fr))' }}
    >
      {states.map((state) => (
        <div
          key={state.id}
          style={{ gridColumn: state.col, gridRow: state.row }}
        >
          <State name={state.name} color={state.color} />
        </div>
      ))}
    </div>
  )
}

export default StatesGrid
