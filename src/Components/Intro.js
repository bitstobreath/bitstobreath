import { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { IntroText } from './IntroText';
import { renderToString } from 'react-dom/server';


class Intro extends Component {
    constructor(params) {
        super();
        this.params = params;
    }

    componentDidMount() {
        this.params.setIntroRead(true);
    }

    render() {
        if (this.params.introRead) {
            return (
                <div>
                    <IntroText/>
                    <span className="my__cursor">|</span>
                </div>
            ) 
        } else {
            return <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(1)
                        .typeString(renderToString(<IntroText />))
                        .start();
                }}
            />;
        }
    }
}

export default Intro;