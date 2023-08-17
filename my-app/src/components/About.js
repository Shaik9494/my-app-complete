import React,{useState} from 'react';

const About = (props) => {
    // const [mystyle,setMystyle]=useState
    // ({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const[btnstate,setbtnstate]=useState('Enable Dark Mode');
    // const toggleStyle=()=>{
    //     if(mystyle.color==='black'){
    //         setMystyle({
    //             color:'white',
    //             backgroundColor:'black',
    //         })
    //         setbtnstate('Enable Light Mode');
    //     }
    //     else{
    //         setMystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setbtnstate('Enable Dark Mode');
    //     }
    // }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
            <h1 className={`text-${props.mode==='light'?'black':'white'} my-3`}>About us</h1>
            <div className="accordion" id="accordionExample" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        FOUNDER
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
                        <strong>SHAIK HUZAIR</strong>
                        <p>This site was developed just for fun as the founder was getting bored and also to refresh his react basic concepts</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        ABOUT FOUNDER
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
                        <div className="conatiner mb-3">
                        <strong>College</strong>
                        <p>Keshav Memorial Institute of Technology</p>
                        <strong>Course</strong>
                        <p>Information and Technology</p>
                        <strong>Email</strong>
                        <p>shaikhu3421@gmail.com</p>
                        <strong>Contact Information</strong>
                        <p>+91 7815891063</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        ABOUT TEXT UTILS
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                    <div className="accordion-body" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
                        <p>This site is an single page application which lets the user to convert the text into various forms</p>
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="mx-3">
                <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnstate}</button>
            </div> */}
        </div>
        </>
    );
}

export default About;
