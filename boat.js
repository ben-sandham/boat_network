const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Dock
ctx.beginPath();
// x > 600-50  y > 440/2
ctx.fillRect(canvas.width - 50, (canvas.height / 2) - 25, 20, 50);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();


class Launch {
	constructor() {
		ctx.beginPath();
		ctx.moveTo(535, 220);
		ctx.lineTo(525, 245);
		ctx.lineTo(545, 245);
		ctx.fill();

	}

}

class Boat {
	constructor(x, y, size, color) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = color;
	}

	// Boat class method to draw individual particle
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
		ctx.fillStyle = '#FFFFFF';
		ctx.fill();
		// ctx.closePath();
	}
	update() {
		this.draw();
	}
}

// create boats array
function initBoats() {
	boatArray = [];
	let num_boats = 20;
	let color = '#FFFFFF';

	boat_coords = []
	// while(boat_coords.length < 20){
	for (let i = 0; i < num_boats; i++){
		temp_x = []
		let x = randomNumber(15, canvas.width - 100);
		let y = randomNumber(15, canvas.height - 15);
		let r = 8
		let boat = {x: x, 
				    y: y, 
				    r: r}
		
		
		overlap = false;
		for (let j = 0; j < boat_coords.length; j++){
			let comp = boat_coords[j];
			var d = Math.sqrt((boat.x - comp.x)**2 + (boat.y - comp.y)**2)
			if (d < boat.r + comp.r){
				overlap = true;
				break
			}
		}

		// If there is no overlap add to coords
		if (!overlap) {
			boat_coords.push(boat);
		}
	}
	
	for (let i = 0; i < boat_coords.length; i++){
		boatArray.push(new Boat(boat_coords[i].x, boat_coords[i].y, boat_coords[i].r, color));
	}
	
	for (let i = 0; i < boatArray.length; i++){
		boatArray[i].update();
	}

}


// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}


window.onload = () => {
	// Randomly distribute boats
	initBoats();

	// Launch
	launch = new Launch();
}

