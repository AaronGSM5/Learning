weight = input('Weight: ')
unit = input('Kg or Lbs: ')

if unit.lower() == 'k':
  converted = float(weight) * 2.205
  print(str(converted) + ' Kg')
elif unit.lower() == 'l':
  converted = float(weight) / 2.205
  print(str(converted) + ' Lbs')
else:
  print('Error: Please enter a K for Kilogramm or L for Pounds')