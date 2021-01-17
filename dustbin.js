class dustbin {
    constructor(xPosition, yPosition) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.xPosition, this.yPosition, this.dustbinWidth, this.wallThickness, {
            isStatic: true
        })
        this.leftWallBody = Bodies.rectangle(this.xPosition - this.dustbinWidth / 2, this.yPosition - this.dustbinHeight / 2, this.wallThickness, this.dustbinHeight, {
            isStatic: true
        })
        Matter.Body.setAngle(this.leftWallBody, this.angle);


        this.rightWallBody = Bodies.rectangle(this.xPosition + this.dustbinWidth / 2, this.yPosition - this.dustbinHeight / 2, this.wallThickness, this.dustbinHeight, {
            isStatic: true
        })
        Matter.Body.setAngle(this.rightWallBody, -1 * this.angle);
        World.add(world, this.bottomBody)
        World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody);

    }

    display() {
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;

        push()
        translate(posLeft.xPosition, posLeft.yPosition);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop()

        push()
        translate(posRight.xPosition, posRight.yPosition);
        rectMode(CENTER)
        stroke(255)
        angleMode(RADIANS)
        fill(255)
        rotate(-1 * this.angle)
        rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop()

        push()
        translate(posBottom.xPosition, posBottom.yPosition);
        rectMode(CENTER)
        stroke(255)
        angleMode(RADIANS)
        fill(255)
        rect(0, 0, this.dustbinWidth, this.wallThickness);
        pop()
    }
}