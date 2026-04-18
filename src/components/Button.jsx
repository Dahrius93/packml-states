const Button = ({ bgColor, name, textColor, callBack, isBlinking }) => {
  return (
    <>
      {isBlinking ? (
        <button
          type="button"
          className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full ${bgColor} border-2 border-gray-950 hover:border-gray-600 transition-colors duration-300 animate-[pulse_0.6s_ease-in-out_infinite]`}
          onClick={callBack}
        >
          <h1 className={`text-sm sm:text-lg ${textColor}`}>{name}</h1>
        </button>
      ) : (
        <button
          type="button"
          className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full ${bgColor} border-2 border-gray-950 hover:border-gray-600 transition-colors duration-300`}
          onClick={callBack}
        >
          <h1 className={`text-sm sm:text-lg ${textColor}`}>{name}</h1>
        </button>
      )}
    </>
  )
}

export default Button
