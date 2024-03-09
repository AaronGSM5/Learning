import random

def roll_dice():
    result = random.randint(1,6)
    return result 

player_name1 = input('Whats the first Players name? ')
player_name2 = input('Whats the second Players name? ')
turn = player_name1


while True:
    value = roll_dice()

    print('Its', turn+"'s" , 'turn')

    if value == 6:
      print(turn, 'got a', value, turn+"'s" ,'wins!')
      break
    else:
        print(turn, 'got a', value, 'turn over.\n')
        roll_again = input('Do you want to roll? Say yes (y) ').lower()
        if roll_again == 'y':
          if turn == player_name1:
              turn = player_name2
          else:
              turn = player_name1

          
       

    

    