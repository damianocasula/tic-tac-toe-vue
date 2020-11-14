
// Check if all row cell statuses are equal
const allEqual = arr => arr.every(val => val.status === arr[0].status)

export default (board, { hIdx, vIdx }) => {
  // Check rows
  if (allEqual(board[hIdx])) { return true }

  // Check columns
  const column = []
  for (const row of board) {
    column.push(row[vIdx])
  }
  if (allEqual(column)) { return true }

  // Check diagonal
  if (hIdx === vIdx) {
    const diagonal = []
    for (const [i, row] of board.entries()) {
      diagonal.push(row[i])
    }
    if (allEqual(diagonal)) { return true }
  }

  // Check opposite diagonal
  if (hIdx + vIdx === 2) {
    const oppositeDiagonal = []
    for (const [i, row] of board.entries()) {
      const oppositeIndex = Math.abs(i - board.length + 1)
      oppositeDiagonal.push(row[oppositeIndex])
    }
    if (allEqual(oppositeDiagonal)) { return true }
  }

  return false
}
