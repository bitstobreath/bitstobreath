import { Component } from 'react';

class ContactText extends Component {
    
    render() {
        return (
            <>
                <span style={{color: 'lightgray'}}>1: </span>
                <span style={{color: 'white'}}>Please contact me on,</span>
                <br/><span style={{color: 'lightgray'}}>2: </span>
                <span style={{color: 'white'}}><a className="mylink text-decoration-none" href="https://www.linkedin.com/in/bitstobreath/">LinkedIn </a>/in/bitstobreath</span>
                <br/><span style={{color: 'lightgray'}}>3: </span>
                <span style={{color: 'white'}}><a className="mytube text-decoration-none" href="https://youtube.com/@bitstobreath/">YouTube </a>@bitstobreath</span>
                <br/><span style={{color: 'lightgray'}}>4: </span>
                <span style={{color: 'white'}}><a className="myX text-decoration-none" href="https://x.com/bitstobreath">X </a>bitstobreath</span>
                <br/><span style={{color: 'lightgray'}}>5: </span>
                <span style={{color: 'white'}}><a className="mytiktok text-decoration-none" href="https://www.tiktok.com/@bitstobreath">TikTok </a>@bitstobreath</span>
                <br/><span style={{color: 'lightgray'}}>6: </span>
                <span style={{color: 'white'}}><a className="myinsta text-decoration-none" href="https://www.instagram.com/bitstobreath/">Instagram </a>bitstobreath</span>
                <br/><span style={{color: 'lightgray'}}>7: </span>
                <span style={{color: 'white'}}><a className="mytwitch text-decoration-none" href="https://www.twitch.tv/bitstobreath">Twitch </a>bitstobreath</span>
                <br/><span style={{color: 'lightgray'}}>8: </span>
                <span style={{color: 'white'}}><a className="myfacebook text-decoration-none" href="https://www.facebook.com/BitsToBreath.FB/">Facebook </a>bitstobreath.FB</span>
            </>
        );
    }
}

export { ContactText };