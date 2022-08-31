const first_friend = {
   name: 'Jack',
   lastname: 'White',
   weight: 79,
   height: 170,
   calBMI: function () {
      this.BMI = Math.round(this.weight/Math.pow(this.height, 2) * 10000)   
      return Math.round(this.weight/Math.pow(this.height, 2) * 10000)   
}
}
const second_friend = {
   name: 'Mike',
   lastname: 'Black',
   weight: 91,
   height: 193,
   calBMI: function () {
      this.BMI = Math.round(this.weight/Math.pow(this.height, 2) * 10000)   
      return Math.round(this.weight/Math.pow(this.height, 2) * 10000)   
}
}

let whoHasMoreMBI = first_friend.calBMI() > second_friend.calBMI() ? `ИМТ ${first_friend.name} ${first_friend.lastname} (${first_friend.calBMI()}) выше, чем у ${second_friend.name} ${second_friend.lastname} (${second_friend.calBMI()})` : `ИМТ ${first_friend.name} ${first_friend.lastname} (${first_friend.calBMI()}) ниже, чем у ${second_friend.name} ${second_friend.lastname} (${second_friend.calBMI()})`

console.log(whoHasMoreMBI)