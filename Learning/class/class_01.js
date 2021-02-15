class car{
	// constructor
	constructor(name,sheet,color,brand){
		this.name=name
		this.sheet=sheet
		this.color=color
		this.brand=brand
	}
	// method
	detailsOfCar()
	{
		return `${this.name} car is of ${this.brand} brand. it has ${this.sheet} sheet and its color is ${this.color}`
	}
}
// acccesing class
var cs_01 = new car('scarpio','5','black','mahindra')

// dis[lay car object
console.log(cs_01)

// display car method
console.log(cs_01.detailsOfCar())