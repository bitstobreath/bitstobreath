import { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { BadgeText } from './BadgeText';
import { renderToString } from 'react-dom/server';

class Badge extends Component {
    constructor(params) {
        super();
        this.params = params;
    }

    componentDidMount() {
        this.params.setBadgeRead(true);
    }

    render() {
        if (this.params.badgeRead) {
            return (
                <div>
                    <BadgeText/>
                    <span className="my__cursor">|</span>
                </div>
            )
        } else {
            return <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(1)
                        .typeString(renderToString(<BadgeText/>))
                        .start();
                }}
            />;
        }
    }
}

export default Badge;