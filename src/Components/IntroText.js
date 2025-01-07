import { PageNames } from '../AppConsts';
import { Component } from 'react';

class IntroText extends Component {
    render() {
        return (
            <>
                <span style={{ color: 'lightgray' }}>1: </span>
                <span style={{ color: 'white' }}>Hello, I'm Austin.</span>
                <br /><span style={{ color: 'lightgray' }}>2: </span>
                <span style={{ color: 'white' }}>I am pursuing and studying:</span>
                <br /><span style={{ color: 'lightgray' }}>3: </span>
                <span style={{ color: 'white' }}>Software Engineering,</span>
                <br /><span style={{ color: 'lightgray' }}>4: </span>
                <span style={{ color: 'white' }}>Cyber Security,</span>
                <br /><span style={{ color: 'lightgray' }}>5: </span>
                <span style={{ color: 'white' }}>And Cloud Architecture.</span>
                <br /><span style={{ color: 'lightgray' }}>6: </span>
                <span style={{ color: 'white' }}>Click <strong>work.css </strong> for more.</span>
            </>
        );
    }
}

export { IntroText };