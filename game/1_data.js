let Asiadata;
let namecount = 0;
let pplcount_2000 = 0;
let pplcount_2020 = 0;
let numofppl = 0;
let numofppltt = 0;
let dots;
let dotstt;

function preload() {
    Asiadata = loadTable("./Asia.csv", "csv", "header");
    HFont = loadFont('BIG JOHN.otf');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log(Asiadata.getRowCount());

    // Dots
    dots = new Group();
    dotstt = new Group();

    // Population count 2000
    var numofppl = int(Asiadata.getString(pplcount_2000, "Num_2000"));

    for (var i = 0; i < floor(numofppl / 100); i++) {
        var d = createSprite(
            random(width), random(height),
            random(5, 30), random(5, 30));
        d.shapeColor = color(0, 0, random(100, 255), 100);
        d.friction = random(0.90, 0.99);
        d.maxSpeed = random(30, 80);
        d.rotateToDirection = true;
        dots.add(d);
    }

    // Population count 2020
    var numofppltt = int(Asiadata.getString(pplcount_2020, "Num_2020") - Asiadata.getString(pplcount_2000, "Num_2000"));

    for (var i = 0; i < floor(numofppltt / 100); i++) {
        var dtt = createSprite(
            random(width), random(height),
            random(5, 30), random(5, 30));
        dtt.shapeColor = color(255, 205, 38);
        dtt.friction = random(0.90, 0.99);
        dtt.maxSpeed = random(30, 80);
        dtt.rotateToDirection = true;
        dotstt.add(dtt);

    }

}


function draw() {

    background(254, 250, 239);

    //Population count 2000
    let numofppl = int(Asiadata.getString(pplcount_2000, "Num_2000"));

    for (var i = 0; i < dots.length; i++) {
        dots[i].attractionPoint(-10, mouseX, mouseY);
    }

    if (keyIsPressed) {

        dots.length = 0;

        for (var i = 0; i < floor(numofppl / 30000); i++) {
            var d = createSprite(
                random(width), random(height),
                random(5, 30), random(5, 30));
            d.shapeColor = color(0, 0, random(100, 255), 100);
            d.friction = random(0.90, 0.99);
            d.maxSpeed = random(30, 80);
            d.rotateToDirection = true;
            dots.add(d);
        }
    }


    // Population count 2020
    let numofppltt = int(Asiadata.getString(pplcount_2020, "Num_2020") - Asiadata.getString(pplcount_2000, "Num_2000"));

    for (var i = 0; i < dotstt.length; i++) {
        dotstt[i].attractionPoint(-10, mouseX, mouseY);
    }

    if (keyIsPressed) {

        dotstt.length = 0;

        for (var i = 0; i < floor(numofppltt / 30000); i++) {
            var dtt = createSprite(
                random(width), random(height),
                random(5, 30), random(5, 30));
            dtt.shapeColor = color(255, 205, 38);
            dtt.friction = random(0.90, 0.99);
            dtt.maxSpeed = random(30, 80);
            dtt.rotateToDirection = true;
            dotstt.add(dtt);
        }
    }

    drawSprites();

    // Country
    textSize(65);
    textAlign(CENTER);
    fill(43, 42, 37);
    textFont(HFont);
    text(Asiadata.getString(namecount, "Country"), windowWidth / 2, windowHeight / 2 - 80);
    
    // Country
    textSize(100);
    textAlign(CENTER);
    fill(43, 42, 37);
    textFont(HFont);
    text(floor(numofppltt / numofppl * 100) + "%", windowWidth / 2, windowHeight / 2+30);
    
    textSize(30);
    textAlign(CENTER);
    fill(255, 205, 38);
    textFont(HFont);
    text("Increase in population \n since 2000", windowWidth / 2, windowHeight / 2+110); 

}


// Choose a row
function keyPressed() {
    if (keyCode === UP_ARROW && namecount < Asiadata.getRowCount()) {
        background(255);
        namecount += 1;
        pplcount_2000 += 1;
        pplcount_2020 += 1;

    } else if (keyCode === DOWN_ARROW && namecount > 1) {
        background(255);
        namecount -= 1;
        pplcount_2000 -= 1;
        pplcount_2020 -= 1;
    }
}
