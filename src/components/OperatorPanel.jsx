import Button from './Button'

const OperatorPanel = () => {
  return (
    <>
      <h3>Operator Panel</h3>
      <div className="flex flex-row min-w-0 h-32 W-32  items-center justify-center gap-4 mt-4 bg-gray-200 ">
        <Button bgColor="bg-white" name="Start" textColor="text-black" />
        <Button bgColor="bg-slate-600" name="Stop" textColor="text-white" />
        <Button bgColor="bg-blue-500" name="Reset" textColor="text-black" />
        <Button bgColor="bg-red-500" name="E-Stop" textColor="text-yellow" />
        <Button bgColor="bg-slate-800" name="hold" textColor="text-white" />
        <Button bgColor="bg-slate-800" name="suspend" textColor="text-white" />
      </div>
    </>
  )
}

export default OperatorPanel
