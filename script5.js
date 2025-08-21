// What will be the value of the action variable after executing this code?

let batteryLevel = 'нет заряда'
let action
switch (batteryLevel) {
  case 'нет заряда':
    action = 1
	break
  case 'низкий':
    action = 2
	break
  case 'полный':
    action = 3
	break
}

console.log(action)