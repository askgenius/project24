class paper {
    constructor(xPosition, yPosition, paperRadius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.paperRadius = paperRadius
        this.body = Bodies.circle(this.xPosition, this.yPosition, this.paperRadius / 2, options)
        World.add(world, this.body);
    }
    display() {
        var paperpos = this.body.position;

        push()
        translate(paperpos.xPosition, paperpos.yPosition);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255, 0, 255)
        ellipse(0, 0, this.paperRadius, this.paperRadius);
        pop()
    }

}