const State = ({ color, name, activeState }) => {
  return activeState === name ? (
    <div
      className={`flex flex-row items-center justify-center w-42 h-12 rounded-xl ${color} border-4 border-slate-700`}
    >
      <h1 className="text-xl text-bold">{name}</h1>
    </div>
  ) : (
    <div
      className={`flex flex-row items-center justify-center w-32 h-12 rounded-xl ${color}`}
    >
      <h1 className="text-lg">{name}</h1>
    </div>
  )
}

export default State
