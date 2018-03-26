let particles = [];

let colors;

let title = "BubbleWorks";
let subtitle = "By Yash Patel";

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);

    canvas.position(0, 0);

    colors = [color(0, 150, 136, 200), color(255, 143, 0, 200), color(250, 250, 250, 200)];

}

function draw() {

    background(21, 35, 45);

    particles.push(new Particle());

    for (particle of particles) {
        particle.update();
        particle.render();
    }

    textAlign(CENTER, CENTER);
    textSize(72);

    noStroke();

    fill(255);
    text(title, width / 2, height / 3);

    fill(255, 150);
    text(title, width / 2 - 3, height / 3 + 3);

    fill(255, 100);
    text(title, width / 2 - 6, height / 3 + 6);

    fill(255, 50);
    text(title, width / 2 - 9, height / 3 + 9);

    stroke(255, 200);
    strokeWeight(2);
    line(width / 2 - 100, height / 2 - 50, width / 2 + 100, height / 2 - 50);

    noStroke();
    textSize(36);

    fill(255);
    text(subtitle, width / 2, height / 2);

    fill(255, 150);
    text(subtitle, width / 2 - 2, height / 2 + 2);

    fill(255, 100);
    text(subtitle, width / 2 - 4, height / 2 + 4);

    fill(255, 50);
    text(subtitle, width / 2 - 6, height / 2 + 6);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, true);
}

class Particle {
    constructor() {
        this.x = mouseX + random(-100, 100);
        this.y = mouseY + random(-100, 100);
        this.xspeed = random(-2, 2);
        this.yspeed = random(-2, 2);

        this.r = 0;
        this.color = random(colors);

        this.maxRadius = 40;
        this.reachedMax = false;
    }

    update() {

        this.x += this.xspeed;
        this.y += this.yspeed;

        if (!this.reachedMax) {
            if (this.r >= this.maxRadius) {
                this.reachedMax = true;
            }
            this.r += 2;
        } else {
            this.r -= 1;
        }

        if (this.r <= 0) {
            particles.splice(particles.indexOf(this), 1);
        }
    }

    render() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2);
    }
}