import random

def roll():
  roll = random.randint(1, 6)
  return roll


while True:
  players = input('Enter the number of players 2-4: ')
  if players.isdigit():
    players = int(players)
    if 2 <= players <= 4:
      break
    else:
      print('Must be between 2-4 Players')
  else:
    print('Invalid try again.')

max_score = 30

player_scores = [0 for _ in range(players)]

while max(player_scores) < max_score:

  for player_index in range(players):
    print("\nIts Players", player_index + 1, "turn")
    print('Your total Score is', player_scores[player_index],"\n")
    current_score = 0

    while max(player_scores) < max_score:
      should_roll = input('roll (y)? ')
      if should_roll.lower() != 'y':
        break

      value = roll()
      if value == 1:
        print('you rolled a 1, turn done!')
        current_score = 0
        break
      else:
        current_score += value
        print('you rolled a', value,)

      print('your score is:', current_score)

    player_scores[player_index] += current_score
    print("Your total Score is", player_scores[player_index])

max_score = max(player_scores)
winning_index = player_scores.index(max_score)
print('player number', winning_index + 1, 'wins with a score of', max_score)