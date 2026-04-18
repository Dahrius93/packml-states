const State = ({ color, name, activeState }) => {
  const base = `flex items-center justify-center w-full min-h-8 sm:min-h-10 md:min-h-12 rounded-lg sm:rounded-xl px-1 py-1 ${color}`
  return activeState === name ? (
    <div className={`${base} border-2 sm:border-6 border-slate-700`}>
      <h1 className="text-[10px] sm:text-sm md:text-base font-bold text-center leading-tight">
        {name}
      </h1>
    </div>
  ) : (
    <div className={base}>
      <h1 className="text-[10px] sm:text-sm md:text-base text-center leading-tight">
        {name}
      </h1>
    </div>
  )
}

export default State
