import { useSelector } from 'react-redux'

const BELT_STATES = {
  fast: ['Execute', 'Holding', 'Suspending'],
  slow: ['Starting', 'Stopping', 'Un-Holding', 'Un-Suspending', 'Completing'],
  veryslow: [''],
  stopped: [
    'Idle',
    'Complete',
    'Held',
    'Suspended',
    'Stopped',
    'Resetting',
    'Clearing',
    'Completing',
    'Aborting',
    'Aborted',
  ],
}

function getBeltMode(activeState) {
  if (BELT_STATES.fast.includes(activeState)) return 'fast'
  if (BELT_STATES.slow.includes(activeState)) return 'slow'
  if (BELT_STATES.veryslow.includes(activeState)) return 'veryslow'
  return 'stopped'
}

const modeConfig = {
  fast: {
    speed: '4s',
    color: 'bg-blue-400',
    label: 'EXECUTING',
    labelColor: 'text-blue-700',
  },
  slow: {
    speed: '8s',
    color: 'bg-green-400',
    label: 'STARTING-STOPPING',
    labelColor: 'text-green-700',
  },
  veryslow: {
    speed: '16s',
    color: 'bg-red-500',
    label: 'ABORTING',
    labelColor: 'text-red-700',
  },
  stopped: {
    speed: null,
    color: 'bg-gray-400',
    label: 'STOPPED',
    labelColor: 'text-gray-600',
  },
}

const BOX_COUNT = 5

const ConveyorBelt = () => {
  const activeState = useSelector((state) => state.state.activeState)
  const mode = getBeltMode(activeState)
  const { speed, color, label, labelColor } = modeConfig[mode]

  const isMoving = speed !== null

  return (
    <div className="flex flex-col items-center mt-6 mb-4 px-2 sm:px-6 w-full select-none">
      <p
        className={`text-xs font-bold uppercase tracking-widest mb-2 ${labelColor}`}
      >
        {label}
      </p>

      {/* Conveyor frame */}
      <div className="relative w-full max-w-[600px] h-14 sm:h-16 md:h-20 bg-gray-700 rounded-lg overflow-hidden border-4 border-gray-800 shadow-lg">
        {/* Belt stripes */}
        <div
          className={`absolute inset-0 flex items-center`}
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 28px,
              rgba(0,0,0,0.15) 28px,
              rgba(0,0,0,0.15) 32px
            )`,
            backgroundSize: '32px 100%',
            animation: isMoving ? `beltMove ${speed} linear infinite` : 'none',
          }}
        />

        {/* Belt surface color overlay */}
        <div
          className={`absolute inset-0 ${color} opacity-70`}
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Moving boxes on the belt */}
        {Array.from({ length: BOX_COUNT }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-100 border-2 border-amber-600 rounded shadow-md flex items-center justify-center text-amber-800 text-xs font-bold"
            style={{
              animation: isMoving ? `boxMove ${speed} linear infinite` : 'none',
              animationDelay: `-${(i / BOX_COUNT) * parseFloat(speed)}s`,
              left: 0,
            }}
          >
            📦
          </div>
        ))}

        {/* Left roller */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gray-500 border-r-2 border-gray-600 rounded-l-lg" />
        {/* Right roller */}
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gray-500 border-l-2 border-gray-600 rounded-r-lg" />
      </div>

      {/* Wheels / rollers below */}
      <div className="flex w-full max-w-[600px] justify-between mt-1 px-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full border-4 border-gray-700 ${color}`}
            style={{
              animation: isMoving ? `spin ${speed} linear infinite` : 'none',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes beltMove {
          from { background-position-x: 0; }
          to   { background-position-x: 32px; }
        }
        @keyframes boxMove {
          from { left: -48px; }
          to   { left: 608px; }
        }
        @keyframes faultFlash {
          from { opacity: 0.1; }
          to   { opacity: 0.45; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default ConveyorBelt
