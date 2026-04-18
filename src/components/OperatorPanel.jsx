import Button from './Button'
import { useDispatch } from 'react-redux'
import {
  reset,
  start,
  stop,
  abort,
  transitioningExecute,
} from '../features/state/stateSlice'

const OperatorPanel = () => {
  const dispatch = useDispatch()

  return (
    <>
      <h3>Operator Panel</h3>
      <div className="flex flex-row min-w-0 h-32 W-32  items-center justify-center gap-4 mt-4 bg-gray-200 ">
        <Button
          bgColor="bg-white"
          name="Start"
          textColor="text-black"
          callBack={() => dispatch(start())}
        />
        <Button
          bgColor="bg-slate-600"
          name="Stop"
          textColor="text-white"
          callBack={() => dispatch(stop())}
        />
        <Button
          bgColor="bg-blue-500"
          name="Reset"
          textColor="text-black"
          callBack={() => dispatch(reset())}
        />
        <Button
          bgColor="bg-red-500"
          name="E-Stop"
          textColor="text-yellow"
          callBack={() => dispatch(abort())}
        />
        <Button bgColor="bg-slate-800" name="hold" textColor="text-white" />
        <Button bgColor="bg-slate-800" name="sus" textColor="text-white" />
        <Button
          bgColor="bg-slate-800"
          name="SC"
          textColor="text-white"
          callBack={() => dispatch(transitioningExecute())}
        />
      </div>
    </>
  )
}

export default OperatorPanel
