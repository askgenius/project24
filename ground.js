class ground {
    constructor(xPosition, yPosition, groundWidth, groundHeight) {
        var options = {
            isStatic: true
        }
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.groundWidth = groundWidth;
        this.groundHeight = groundHeight;
        this.body = Bodies.rectangle(xPosition, yPosition, groundWidth, groundHeight, options);
        World.add(world, this.body);

    }
    display() {

        var groundPos = this.body.position;

        push();
        translate(groundPos.xPosition, groundPos.yPosition);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255, 255, 0);
        rect(0, 0, this.groundWidth, this.groundHeight);
        pop();
    }
}
