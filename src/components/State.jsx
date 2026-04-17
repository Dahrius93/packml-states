const State = ({ color, name }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center w-32 h-12 rounded-xl ${color}`}
    >
      <h1 className="text-lg">{name}</h1>
    </div>
  )
}

export default State
