field = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0], 
]

while True:
  column = 8
  while True:
    column = input('Player 1 which column? (1-7) ')
    if column.isdigit():
      column = int(column)-1
      if 0 <= column <= 6:
        break
      else:
        print('Must be betwenn 1-7')
    else:
      print('Invalid try again.')

  row = 5


  if field[row][column] != 1 and field[row][column] != 2:
    field[row][column] = 1

  print('\n'.join(map(str, field)))
