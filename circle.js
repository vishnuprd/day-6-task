//1)get radius

class circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
getRadius(){
    console.log(`the radius of the circle is : ${this.radius}`);
}

}

var radius = 1.0;
var color = "red";

var c = new Circle(radius, color); 
c.getRadius(); 
console.log(c.color);

//2)set radius

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    set changeRadius(modifiedRadius) {
        this.radius = modifiedRadius;
    }
}

var c = new Circle(1.0, "red");
c.changeRadius = 10; 
console.log(c.radius); 



//3)get color

class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = red;
    }
   getcolor(){
    console.log(`the color of the circle is ${this.color}`);
   }
}


//4)set color 


class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    set changeColor(modifiedColor) {
        this.color = modifiedColor;
    }
}

var radius = 1.0;
var color = "red";

var c = new Circle(radius, color);
c.changeColor = "Blue";
console.log(c.color);


//5)To string 


class circle{
    constructor(radius,circle){
        this.radius = radius;
        this.color = color;
    }

    tostring(){
        return(`Radius: ${this.radius}, Color: ${this.color}`)
    }
}
var radius = 1.0;
var color = "red";

var c = new circle(radius, color);
var circleString = c.tostring();
console.log(circleString);


//6)get area()

//area of circle is A = \pi r^2
//A	=	area
//r	=	radius



class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getArea() {
        return `The area of the circle is: ${Math.PI * Math.pow(this.radius, 2)}`;
    }
}

var radius = 1.0;
var color = "red";

var c = new Circle(radius, color);

console.log(c.getArea()); // Call the getArea() method and log the result


//7)get circumference

//C = 2 \pi r
//C	=	circumference
//pi	=	the constant pi
//r	=	radius of the circle


class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

var radius = 1.0;
var color = "red";

var c = new Circle(radius, color);

var circumference = c.getCircumference();
console.log(`The circumference of the circle is: ${circumference}`);













































