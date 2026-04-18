import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import {
  reset,
  start,
  stop,
  abort,
  hold,
  suspend,
  transitioningExecute,
} from '../features/state/stateSlice'

const OperatorPanel = () => {
  const dispatch = useDispatch()
  const { blinkReset, blinkStart, blinkSC } = useSelector(
    (state) => state.state,
  )

  return (
    <div className="flex items-center justify-center px-2">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-12 p-3 sm:p-4 bg-gray-200 border-2 border-slate-500 rounded-lg w-full max-w-lg sm:max-w-none sm:w-auto">
        <Button
          bgColor="bg-white"
          name="Start"
          textColor="text-slate-800"
          callBack={() => dispatch(start())}
          isBlinking={blinkStart}
        />
        <Button
          bgColor="bg-slate-600"
          name="Stop"
          textColor="text-white"
          callBack={() => dispatch(stop())}
          isBlinking={false}
        />
        <Button
          bgColor="bg-blue-500"
          name="Reset"
          textColor="text-slate-800"
          callBack={() => dispatch(reset())}
          isBlinking={blinkReset}
        />
        <Button
          bgColor="bg-neutral-100"
          name="SC"
          textColor="text-slate-800"
          callBack={() => dispatch(transitioningExecute())}
          isBlinking={blinkSC}
        />
        <Button
          bgColor="bg-red-500"
          name="E-Stop"
          textColor="text-yellow"
          callBack={() => dispatch(abort())}
          isBlinking={false}
        />
        <Button
          bgColor="bg-slate-800"
          name="hold"
          textColor="text-white"
          callBack={() => dispatch(hold())}
          isBlinking={false}
        />
        <Button
          bgColor="bg-slate-800"
          name="sus"
          textColor="text-white"
          callBack={() => dispatch(suspend())}
          isBlinking={false}
        />
      </div>
    </div>
  )
}

export default OperatorPanel
