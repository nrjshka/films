import { useEffect, useState } from 'react'

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(() => {
    const handlerId = setTimeout(() => setDebouncedValue(value), delay)

    return () => clearTimeout(handlerId)
  }, [value, delay])

  return debouncedValue
}

export { useDebounce }
