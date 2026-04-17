const Button = ({ bgColor, name, textColor }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center w-16 h-16 rounded-full ${bgColor} border-2 border-gray-400 hover:border-gray-600 transition-colors duration-300`}
    >
      <h1 className={`text-lg ${textColor}`}>{name}</h1>
    </button>
  )
}

export default Button
