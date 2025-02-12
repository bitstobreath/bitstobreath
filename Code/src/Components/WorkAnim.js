import { Modal } from 'bootstrap';
import { animated } from "react-spring";
import { useSpring } from "react-spring";
import { useGesture } from "@use-gesture/react";

/**
 * Modal Info
 */

 class Tile {
    constructor(description, context, tool, projectType, linkText, link, preview) {
        this.description = description;
        this.context = context;
        this.tool = tool;
        this.projectType = projectType;
        this.linkText = linkText;
        this.link = link;
        this.preview = preview;
    }
}

let Tiles = []

Tiles.push(new Tile(
    "Blackberry Cyber Security Professional",
    " - developed modular code for company security features",
    "Security Systems Developer and SOC Developer",
    "Blackberry",
    "View Company",
    "https://blackberry.com",
    "/Blackberry.png"
));

Tiles.push(new Tile(
    "Dark themed bootstrap style website for concrete business.",
    " - developed solo",
    "css, html, bootstrap, js",
    "ASC Site",
    "View Business Site",
    "https://ascohio.com/",
    "/asc.png"
));

Tiles.push(new Tile(
    "Industrial Automation Teacher",
    " - developed student knowledge",
    "Fanuc, ABB, Motoman",
    "St Clair College",
    "View College",
    "https://stclaircollege.ca/",
    "/scc.jpg"
));

Tiles.push(new Tile(
    "Cyber Security Student",
    " - developed student knowledge",
    "Cyber Requirements, Pentesting and Defensive Security",
    "Toronto Metropolitan TMU",
    "View University",
    "https://www.torontomu.ca/",
    "/tmu.png"
));

/**
 * Scroller Stuff
 */

const clamp = (value, clampAt = 30) => {
    if (value > 0) {
        return value > clampAt ? clampAt : value;
    } else {
        return value < -clampAt ? -clampAt : value;
    }
};

const WorkAnim = () => {
    /**
    * Horizontal Drag
    */
    const [style, set] = useSpring(() => ({
        transform: "perspective(300px) rotateY(0deg)"
    }));

    const bind = useGesture({
        onScroll: (event => {
            set({
                transform: `perspective(300px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`
            });
        }),
        onDrag: (event => {
            if (event.dragging) {
                document.querySelector('.containers').scrollLeft -= event.delta[0];
            }
        }),
        onWheel: (event) => {
            if (event.wheeling) {
                document.querySelector(".containers").scrollLeft += event.delta[1];
            }
        }
    });
    return (
        <div className="containers" {...bind()}>
            {Tiles.map(t => (
                <animated.div
                    key={t.preview}
                    style={
                        {
                            ...style
                        }
                    }>
                    <animated.p className="text-white work-anim-text">{t.projectType}</animated.p>
                    <animated.div
                        onDoubleClick={() => {
                            document.getElementById('exampleModalTitle').innerText = t.projectType
                            document.getElementById('exampleModalDescription').innerText = t.description
                            document.getElementById('exampleModalLink').href = t.link
                            document.getElementById('exampleModalTool').innerText = t.tool
                            document.getElementById('exampleModalContext').innerText = t.context
                            document.getElementById('exampleModalLink').innerText = t.linkText
                            var myModal = new Modal(document.getElementById('exampleModal'))
                            myModal.show()
                        }
                        }
                        className="cards"
                        style={{
                            backgroundImage: `url(${t.preview})`
                        }}
                    />
                </animated.div>

            ))}
        </div>
    )
}

export default WorkAnim;