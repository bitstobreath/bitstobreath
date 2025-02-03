import { Component } from 'react';

class AboutText extends Component {
    render() {
        return (
            <>
                <span style={{ color: 'lightgray' }}>1: </span>
                <span style={{ color: 'white' }}>Bits To Breath is my business.</span>
                <br /><span style={{ color: 'lightgray' }}>2: </span>
                <span style={{ color: 'white' }}>It's a company of one.</span>
                <br /><span style={{ color: 'lightgray' }}>3: </span>
                <span style={{ color: 'white' }}>This site was built with:</span>
                <br /><span style={{ color: 'lightgray' }}>4: </span>
                <span style={{ color: 'white' }}>css, js, html, reactjs, bootstrap</span>
                <br /><span style={{ color: 'lightgray' }}>5: </span>
                <span style={{ color: 'white' }}>Tools used include:</span>
                <br /><span style={{ color: 'lightgray' }}>6: </span>
                <span style={{ color: 'white' }}>Figma and VS Code.</span>
                <br /><span style={{ color: 'lightgray' }}>7: </span>
                <span style={{ color: 'white' }}>GitHub Repository:</span>
                <br /><span style={{ color: 'lightgray' }}>8: </span><span style={{ color: 'white' }}><a className='mylink' href='https://github.com/bitstobreath/bitstobreath/'>@bitstobreath/bitstobreath</a></span>                
            </>
        );
    }
}

export { AboutText };