const jack = {
   name: 'Jack',
   lastname: 'White',
   weight: 79,
   height: 170,
   calBMI: function () {
      this.BMI = Math.round(this.weight/Math.pow(this.height, 2) * 10000)   
      return Math.round(this.weight/Math.pow(this.height, 2) * 10000)   
}
}
const mike = {
   name: 'Mike',
   lastname: 'Black',
   weight: 91,
   height: 193,
   calBMI: function () {
      this.BMI = Math.round(this.weight/Math.pow(this.height, 2) * 10000)   
      return Math.round(this.weight/Math.pow(this.height, 2) * 10000)   
}
}

let whoHasAHigherBMI = jack.calBMI() > mike.calBMI() ? `BMI ${jack.name} ${jack.lastname} (${jack.calBMI()}) is higher than ${mike.name} ${mike.lastname} (${mike.calBMI()}).` : `BMI ${mike.name} ${mike.lastname} (${mike.calBMI()}) is higher than ${jack.name} ${jack.lastname} (${jack.calBMI()}).`

console.log(whoHasAHigherBMI)
