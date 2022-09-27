interface CardProps {
  label: string
  when: string
  description: string
  link?: string
  done?: boolean
  prize?: string
  is: string
}

export interface Goal extends CardProps {
  label: string
  when: string
  description: string
  link?: string
  done?: boolean
  id: string
}

function random(f: number, t: number) {
  return Math.floor(Math.random() * (t - f)) + f
}

export function Skeleton() {
  return (
    <div className="flex flex-col text-sm border dark:border-white/10 dark:bg-[#222] rounded-md p-6">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div
            className="h-4 bg-[#444] rounded"
            style={{
              width: `${random(30, 90)}%`,
            }}
          ></div>
          <div className="flex items-center space-x-2">
            <div
              className="h-4 bg-[#444] rounded"
              style={{
                width: `${random(20, 30)}%`,
              }}
            ></div>
            <div
              className="h-4 bg-[#444] rounded"
              style={{
                width: `${random(20, 30)}%`,
              }}
            ></div>
          </div>
          <div className="space-y-2">
            <div
              className="h-4 bg-[#444] rounded"
              style={{
                width: `${random(80, 100)}%`,
              }}
            ></div>
            <div
              className="h-4 bg-[#444] rounded"
              style={{
                width: `${random(40, 90)}%`,
              }}
            ></div>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <div
              className="h-4 bg-[#444] rounded"
              style={{
                width: `${random(20, 30)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Card(props: CardProps) {
  return (
    <div className="flex flex-col text-sm border dark:border-white/10 dark:bg-[#222] rounded-md p-6">
      <h1 className="font-semibold text-base pb-1">{props.label}</h1>
      <h2 className="text-xs text-[#999] pb-1 capitalize">{props.when}</h2>

      <div className="w-full py-2  flex space-x-2">
        {props.is === 'event' && (
          <button className="duration-200 font-semibold rounded-md border shadow  hover:shadow-purple-400 shadow-purple-600 text-purple-600 border-purple-500/10 px-3 py-2 text-xs">
            EVENT
          </button>
        )}
        {props.is === 'todo' && (
          <button className="duration-200 font-semibold rounded-md border shadow  hover:shadow-pink-400 shadow-pink-600 text-pink-600 border-purple-500/10 px-3 py-2 text-xs">
            TODO
          </button>
        )}
        {props.is === 'goal' && (
          <button className="duration-200 font-semibold rounded-md border shadow  hover:shadow-orange-400 shadow-orange-600 text-orange-600 border-purple-500/10 px-3 py-2 text-xs">
            GOAL
          </button>
        )}
        {props.prize && (
          <button className="duration-200 font-semibold rounded-md border shadow-sm hover:shadow bg-green-600 hover:bg-green-700 border-green-500/10 px-2 py-1 text-xs">
            {props.prize}
          </button>
        )}
      </div>
      <p className="flex-1">
        {props.description.split('\n').map(line => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <div className="flex items-end w-full pt-4 space-x-4">
        <div className="flex-1"></div>
        {props.done && (
          <button className="duration-200 font-semibold rounded-md border shadow-sm hover:shadow hover:shadow-green-300 shadow-green-600 border-green-500/10 px-3 py-2 text-xs">
            Done
          </button>
        )}
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#333] hover:bg-[#444] duration-200 font-semibold rounded-md border border-white/10 px-3 py-2 text-xs"
          >
            Follow Link
          </a>
        )}
      </div>
    </div>
  )
}
