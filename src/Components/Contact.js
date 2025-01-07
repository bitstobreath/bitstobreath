import { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { ContactText } from './ContactText';
import { renderToString } from 'react-dom/server';

class Contact extends Component {
    constructor(params) {
        super();
        this.params = params;
    }

    componentDidMount() {
        this.params.setContactRead(true);
    }

    render() {
        if (this.params.contactRead) {
            return (
                <div>
                    <ContactText/>
                    <span className="my__cursor">|</span>
                </div>
            );
        } else {
            return <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(1)
                        .typeString(renderToString(<ContactText />))
                        .start();
                }}
            />;
        }
    }
}

export default Contact;