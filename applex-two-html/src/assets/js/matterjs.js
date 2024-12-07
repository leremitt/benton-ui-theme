function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create(),
    world = engine.world;

  // Get the container element and its dimensions
  var containerElement = document.querySelector(".tags-container");
  var containerWidth = containerElement.clientWidth;
  var containerHeight = containerElement.clientHeight;

  // create a renderer
  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "#fff",
      wireframes: false,
    },
  });

  // create bounds
  var ground = Bodies.rectangle(
    containerWidth / 2 + 160,
    containerHeight + 80,
    containerWidth + 320,
    160,
    {
      render: {
        fillStyle: "#111111",
      },
      isStatic: true,
    }
  );
  var wallLeft = Bodies.rectangle(
    -80,
    containerHeight / 2,
    160,
    containerHeight,
    {
      isStatic: true,
    }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 80,
    containerHeight / 2,
    160,
    1200,
    {
      isStatic: true,
    }
  );
  var roof = Bodies.rectangle(
    containerWidth / 2 + 160,
    -80,
    containerWidth + 320,
    160,
    {
      isStatic: true,
    }
  );

  // object colors & variables

  var radius = 20;

  // create objects

  // tagVideo & design
  var tagFotografie = Bodies.rectangle(containerWidth / 2 + 150, 500, 164, 56, {
    chamfer: {
      radius: radius,
    },
    render: {
      sprite: {
        texture: "../assets/images/sponsor-maestro.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var tagVideo = Bodies.rectangle(containerWidth / 2 - 150, 460, 122, 56, {
    chamfer: {
      radius: radius,
    },
    render: {
      sprite: {
        texture: "../assets/images/sponsor-2.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var tagMerkstrategie = Bodies.rectangle(
    containerWidth / 2 + 250,
    420,
    204,
    56,
    {
      chamfer: {
        radius: radius,
      },
      render: {
        sprite: {
          texture: "../assets/images/sponsor-3.png",
          xScale: 1,
          yScale: 1,
        },
      },
    }
  );
  var tagSocialcontent = Bodies.rectangle(
    containerWidth / 2 - 75,
    380,
    204,
    56,
    {
      chamfer: {
        radius: radius,
      },
      render: {
        sprite: {
          texture: "../assets/images/sponsor-4.png",
          xScale: 1,
          yScale: 1,
        },
      },
    }
  );
  // video
  var tagWebstrategie = Bodies.rectangle(
    containerWidth / 2 - 74,
    540,
    194,
    56,
    {
      chamfer: {
        radius: radius,
      },
      render: {
        sprite: {
          texture: "../assets/images/sponsor-5.png",
          xScale: 1,
          yScale: 1,
        },
      },
    }
  );
  var tagSocialstrategie = Bodies.rectangle(
    containerWidth / 2 + 174,
    490,
    216,
    56,
    {
      chamfer: {
        radius: radius,
      },
      render: {
        sprite: {
          texture: "../assets/images/sponsor-6.png",
          xScale: 1,
          yScale: 1,
        },
      },
    }
  );
  var tagWebdesign = Bodies.rectangle(containerWidth / 2 - 142, 440, 167, 56, {
    chamfer: {
      radius: radius,
    },
    render: {
      sprite: {
        texture: "../assets/images/sponsor-7.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var tagWervingscampagne = Bodies.rectangle(
    containerWidth / 2 - 10,
    260,
    260,
    56,
    {
      chamfer: {
        radius: radius,
      },
      render: {
        sprite: {
          texture: "../assets/images/sponsor-8.png",
          xScale: 1,
          yScale: 1,
        },
      },
    }
  );
  //misc
  var tagCampagne = Bodies.rectangle(containerWidth / 2 - 242, 420, 174, 56, {
    chamfer: {
      radius: radius,
    },
    render: {
      sprite: {
        texture: "../assets/images/sponsor-9.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var tagTekstenvoorjongeren = Bodies.rectangle(
    containerWidth / 2 + 60,
    380,
    275,
    56,
    {
      chamfer: {
        radius: radius,
      },
      render: {
        sprite: {
          texture: "../assets/images/sponsor-10.png",
          xScale: 1,
          yScale: 1,
        },
      },
    }
  );
  var tagBranddesign = Bodies.rectangle(containerWidth / 2, 360, 194, 56, {
    chamfer: {
      radius: radius,
    },
    render: {
      sprite: {
        texture: "../assets/images/sponsor-12.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var tagMotiondesign = Bodies.rectangle(
    containerWidth / 2 - 59,
    260,
    201,
    56,
    {
      chamfer: {
        radius: radius,
      },
      render: {
        sprite: {
          texture: "../assets/images/sponsor-12.png",
          xScale: 1,
          yScale: 1,
        },
      },
    }
  );

  // add all of the bodies to the world
  World.add(engine.world, [
    ground,
    wallLeft,
    wallRight,
    roof,
    tagFotografie,
    tagVideo,
    tagMerkstrategie,
    tagSocialcontent,
    tagWebstrategie,
    tagSocialstrategie,
    tagWebdesign,
    tagWervingscampagne,
    tagCampagne,
    tagTekstenvoorjongeren,
    tagBranddesign,
    tagMotiondesign,
  ]);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // Allow page scrolling in matter.js window
  mouse && mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse &&
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  // Detect clicks vs. drags
  let click = false;

  document.addEventListener("mousedown", () => (click = true));
  document.addEventListener("mousemove", () => (click = false));
  document.addEventListener("mouseup", () =>
    console.log(click ? "click" : "drag")
  );

  // Create a On-Mouseup Event-Handler
  Events.on(mouseConstraint, "mouseup", function (event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) {
        var body = bodies[i];
        // Check if clicked or dragged
        if (click === true) {
          if (
            Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)
          ) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            // Hyperlinking feature
            if (bodyUrl != undefined) {
              //window.location.href = bodyUrl;
              window.open(bodyUrl, "_blank");
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
}

// Get the container element
var containerElement = document.querySelector(".tags-container");

// Create an intersection observer
var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Initialize the simulation when the element is visible
      initSimulation();

      // Disconnect the observer after triggering the tagSocialstrategie
      observer.disconnect();
    }
  });
}, {});

if (containerElement) {
  // Observe the container element
  observer.observe(containerElement);
}
