import { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { AboutText } from './AboutText';
import { renderToString } from 'react-dom/server';

class About extends Component {
    constructor(params) {
        super();
        this.params = params;
    }

    componentDidMount() {
        this.params.setAboutRead(true);
    }

    render() {
        if (this.params.aboutRead) {
            return (
                <div>
                    <AboutText/>
                    <span className="my__cursor">|</span>
                </div>
            )
        } else {
            return <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(1)
                        .typeString(renderToString(<AboutText/>))
                        .start();
                }}
            />;
        }
    }
}

export default About;