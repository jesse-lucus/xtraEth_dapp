import { useEffect, useState } from 'react'

import { ThemedText } from '../../theme'

const MINUTE = 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24

export function Countdown({ exactEnd, canLiquidate }: { exactEnd: Date; canLiquidate: boolean }) {
  // get end/beginning times

  const end = exactEnd.getTime()

  // get current time
  const [time, setTime] = useState(() => Math.floor(Date.now() / 1000))
  useEffect((): (() => void) | void => {
    // we only need to tick if rewards haven't ended yet
    if (time <= end) {
      const timeout = setTimeout(() => setTime(Math.floor(Date.now() / 1000)), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [time, end])

  const timeUntilEnd = end - time
  // debugger
  let timeRemaining: number
  let message: string

  const ongoing = timeUntilEnd >= 0
  if (ongoing) {
    message = 'Rewards end in'
    timeRemaining = timeUntilEnd
  } else {
    message = 'Rewards have ended!'
    timeRemaining = Infinity
  }

  // const days = (timeRemaining - (timeRemaining % DAY)) / DAY
  // timeRemaining -= days * DAY
  const hours = (timeRemaining - (timeRemaining % HOUR)) / HOUR
  timeRemaining -= hours * HOUR
  const minutes = (timeRemaining - (timeRemaining % MINUTE)) / MINUTE
  timeRemaining -= minutes * MINUTE
  const seconds = timeRemaining

  return (
    <ThemedText.DeprecatedBlack fontWeight={400}>
      {Number.isFinite(timeRemaining) ? (
        <code>
          {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`}
        </code>
      ) : canLiquidate ? (
        <>✅ </>
      ) : (
        <>❗ </>
      )}
    </ThemedText.DeprecatedBlack>
  )
}
