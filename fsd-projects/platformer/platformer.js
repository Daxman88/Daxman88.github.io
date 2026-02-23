
$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(100,610,200,10, "red")
  createPlatform(350,490,150,10, "red")
  createPlatform(650,380,200,10, "red")
  createPlatform(950,280,200,10, "red")
  createPlatform(660,150,200,10, "red")
  createPlatform(550,150,50,10, "red")
  createPlatform(400,270,50,10, "red")
  createPlatform(150,270,50,10, "red")
  createPlatform(1200,150,55,10, "red")
  createPlatform(195,620,10, 200, "red")
  createPlatform(420,500,10, 300, "red")
  createPlatform(750,390,10, 400, "red")
  createPlatform(550, 535, 200,10,"red")


    // TODO 3 - Create Collectables
  createCollectable("steve", 150, 220)
  createCollectable("steve",1200, 100)
  createCollectable("steve",1050, 242)
  createCollectable("steve",130, 700)
  createCollectable("steve",600,490)
    
    // TODO 4 - Create Cannons
  createCannon("right", 300, 2000, 70, 70);
  createCannon("bottom", 550, 1500, 70, 70);
  createCannon("bottom", 1170, 2000, 70, 70);
  createCannon("right", 750, 1500, 70, 70);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
