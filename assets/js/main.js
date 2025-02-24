//document.addEventListener("DOMContentLoaded", function () { new SweetScroll({}); particlesJS("particles-js", { particles: { number: { value: 30, density: { enable: !0, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "polygon", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: .5, random: !1, anim: { enable: !1, speed: 1, opacity_min: .1, sync: !1 } }, size: { value: 3, random: !0, anim: { enable: !1, speed: 19.18081918081918, size_min: .1, sync: !1 } }, line_linked: { enable: !0, distance: 150, color: "#ffffff", opacity: .4, width: 1 }, move: { enable: !0, speed: 4, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 1200 } }, nb: 80 }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !1, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: !0 }) }, !1);
document.addEventListener("DOMContentLoaded", function () {
    new SweetScroll({});

    particlesJS("particles-js", {
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
    value: [
        "#32CD32", // Lime Green (Darker)
        "#7CFC00", // Lawn Green
        "#ADFF2F", // Green Yellow
        "#9ACD32", // Yellow Green
        "#FFFF00", // Yellow
        "#FFD700", // Gold
        "#FFA500", // Orange
        "#FF8C00", // Dark Orange
        "#FF4500", // Orange Red
        "#DC143C", // Crimson
        "#FF0000", // Red
    ]
},
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" }
        },
            opacity: {
                value: 0.85,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 7.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    size_min: 3,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1, // Slower particle movement
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse" // Repulsion effect on hover
                },
                onclick: {
                    enable: true,
                    mode: "push" // Adds particles on click
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });


    // Set the background color to dark mode with financial grid lines
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        particlesContainer.style.background = 'linear-gradient(135deg, #000000, #1a1a1a)'; // Dark background
    }
});
