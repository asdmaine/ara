tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        number: {
          value: 0,
          density: {
            enable: true,
          }
        },
        color: {
          value: "#ff0000",
          animation: {
            enable: true,
            speed: 180,
            sync: true
          }
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: { min: 10, max: 50 },
          animation: {
            enable: true,
            speed: 5,
            sync: true,
            startValue: "random",
            destroy: "max"
          }
        },
        move: {
          enable: true,
          speed: { min: 5, max: 10 },
          direction: "none",
          outModes: "destroy",
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "trail"
          },
        },
        modes: {
          trail: {
            delay: 0.005,
            quantity: 5
          }
        }
      },
      background: {
        color: "#000000",
        image:
          "url('https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
      },
      backgroundMask: {
        enable: true,
        cover: {
          color: "#000000"
        }
      }
    }
  });
  