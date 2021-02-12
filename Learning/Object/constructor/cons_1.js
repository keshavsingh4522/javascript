function Course(title,instructor,level,published,views)
{
	this.title = title
	this.instructor = instructor
	this.published = published
	this.level = level
	this.views = views
	this.updateViews = function() {
		return ++this.views
	}
}
var course01 = new Course('javascript training','keshav singh',1,true,0)
console.log(course01)
console.log(course01.views)
console.log(course01.updateViews())
console.log(course01.views)

var course02 = new Course('git training','keshu',1,true,0)
console.log(course02)
console.log(course02.views)
console.log(course02.updateViews())
console.log(course02.views)


courses = [
	new Course('javascript training','keshav singh',1,true,0),
	new Course('git training','keshu',1,true,0)
]
console.log(courses)
console.log(courses[0])
console.log(courses[1])
console.log(courses[1].title)
