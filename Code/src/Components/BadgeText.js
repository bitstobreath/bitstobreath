import { Component } from 'react';

class BadgeText extends Component {
    render() {
        return (
            <>
               <span style={{color: 'lightgray'}}>1: </span>
                <span style={{color: 'white'}}>Currently Working At:</span>
                <br/><span style={{color: 'lightgray'}}>2: </span>
                <span style={{color: 'white'}}>Varsity Tutors; Full Time;</span>
                <br/><span style={{color: 'lightgray'}}>3: </span>
                <span style={{color: 'white'}}>Programming, Cyber Security, Math and Engineering</span>
                <br/><span style={{color: 'lightgray'}}>4: </span>
                <span style={{color: 'white'}}>Training in some languages and educating often</span>
                <br/><span style={{color: 'lightgray'}}>5: </span>
                <span style={{color: 'white'}}>Teaching is good for others and the teacher</span>
                <br/><span style={{color: 'lightgray'}}>6: </span>
                <span style={{color: 'white'}}>Click <a className='myvarsity text-decoration-none"' href="https://www.varsitytutors.com/tutors/879276409">here</a> if you need a Tutor</span>
            </>
        );
    }
}

export { BadgeText };