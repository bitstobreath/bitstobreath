import { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { renderToString } from 'react-dom/server';
import { WorkText } from './WorkText';
import WorkAnim from './WorkAnim';

class Work extends Component {
    constructor(params) {
        super();
        this.params = params;
    }

    componentDidMount() {
        this.params.setWorkRead(true);
    }


    render() {
        if (this.params.workRead) {
            return (
                <div>
                    <div>
                        <WorkText />
                        <span className="my__cursor">|</span>
                    </div>
                    <WorkAnim></WorkAnim>
                </div>
            );
        } else {
            return <div>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(1)
                            .typeString(renderToString(<WorkText />))
                            .start();
                    }}>
                </Typewriter>
                <WorkAnim></WorkAnim>
            </div>;
        }
    }
}

export default Work;