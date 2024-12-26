// //complete this code
// class Rectangle {
// 	constructor(width, height){
// 		this._width=width;
// 		this._height=height;
// 	}

// 	get width(){
// 		return this._width;
// 	}
// 	get height(){
// 		return this._height;
// 	}

// 	getArea(){
// 		let area=this.height*this.width;
// 		return area;
// 	}
// }

// class Square extends Rectangle {
// 	constructor(side){
// 		this._side=side;
// 	}

// 	getPerimeter(){
// 		let per=4*this.side;
// 		return per;
// 	}
// }

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        let area = this.height * this.width;
        return area;
    }
}

class Square extends Rectangle {
    constructor(side) {
        // Call the parent class constructor with width and height being the same
        super(side, side);
    }

    get side() {
        return this.width; // Or this.height, since they are the same for a square
    }

    getPerimeter() {
        let per = 4 * this.side;
        return per;
    }
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
