import { useEffect, useState } from 'react'
import { randomScrambleForEvent } from 'cubing/scramble'

function useScrambles () {
  const [index, setIndex] = useState(-2)
  const [scrambleList, setScrambleList] = useState([])

  useEffect(() => {
    getNextScramble()
    setIndex(0)
  }, [])

  async function getNextScramble () {
    if (!scrambleList[index + 1]) {
      const getScramble = await randomScrambleForEvent('333')
      setScrambleList(prev => [...prev, getScramble.toString()])
    }
    setIndex(prev => prev + 1)
  }

  function getPrevScramble () {
    setIndex(prev => prev - 1)
  }
  return { getPrevScramble, getNextScramble, index, scrambleList }
}

export default useScrambles
