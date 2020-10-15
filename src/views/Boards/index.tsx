import React, { useEffect, useState } from 'react'
import { Title, Wrapper, BoardList, Board } from './styles'
import Api from '../../providers/Api'
import User from '../../providers/User'

interface Board {
  id: number;
  name: string;
}

const Boards = () => {
  const [boards, setBoards] = useState<Board[]>([])

  useEffect(() => {
    try {
      Api.get(`users/${User.get().user?.id}/boards`).then(rsp => setBoards(rsp.data))
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <Wrapper>
      <Title>Boards</Title>
      <BoardList>
        {boards.map(board => <Board key={board.id}>{board.name}</Board>)}
      </BoardList>
    </Wrapper>
  )
}

export default Boards
