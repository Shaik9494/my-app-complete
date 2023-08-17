import React,{useState} from 'react';
const Textform = (props) => {
    const handelclickupper=()=>{
        let ntext=text.toUpperCase();
        setText(ntext)
        props.setalert("Coverted to UpperCase","success");
    }
    const handelclicklower=()=>{
        let ntext=text.toLowerCase();
        setText(ntext)
        props.setalert("Coverted to LowerCase","success");
    }
    const handelclickbinary=()=>{
        const binaryArray = [];
        for (let i = 0; i < text.length; i++) {
            const binaryChar = text[i].charCodeAt(0).toString(2);
            binaryArray.push(binaryChar.padStart(8, '0'));
            setText(binaryArray.join(' '))
        }
        props.setalert("Coverted to Binary","success");
    }
    const handelclicktext=()=>{
        const binaryArray = text.split(' ');
        const textArray = binaryArray.map((binaryChar) => {
        const decimalValue = parseInt(binaryChar, 2);
        return String.fromCharCode(decimalValue);
        });
        setText(textArray.join(''));
        props.setalert("Coverted to Text","success");
    }
    const handelclickhexa=()=>{
        const binaryArray = text.split(' ');
        const hexArray = binaryArray.map((binaryNibble) => {
        const decimalValue = parseInt(binaryNibble, 2);
        return decimalValue.toString(16).toUpperCase();
        });
        setText(hexArray.join(' '));
        props.setalert("Coverted to HexaDecimal","success");
    }
    const handelclickhexat=()=>{
        const hexArray = text.split(' ');
        const textArray = hexArray.map((hexPair) => {
        const decimalValue = parseInt(hexPair, 16);
        return String.fromCharCode(decimalValue);
        });
        setText(textArray.join(''));
        props.setalert("Coverted from HexaDecimal to Text","success");
    }
    const handelchange=(event)=>{
        setText(event.target.value);
    }
    const handelclickclear=()=>{
        let ntext="";
        setText(ntext);
        props.setalert("Data cleared","warning");
    }
    const countVowels = () => {
        const vowelMatches = text.match(vowelRegex);
        return vowelMatches ? vowelMatches.length : 0;
    };
    const countConsonants = () => {
        const consonantMatches = text.match(consonantRegex);
        return consonantMatches ? consonantMatches.length : 0;
    };
    const[text,setText]=useState("Enter text here");
    const vowelRegex = /[aeiou]/gi;
    const consonantRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;
    return (
        <>
        <div className='conatiner' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className={`text-${props.mode==='light'?'black':'white'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} onChange={handelchange} id="myBox" rows="6"/>
            </div>
            <button type="button" className="btn btn-primary mx-2 mb-3" onClick={handelclickupper}>Convert Upper</button>
            <button type="button" className="btn btn-primary mx-2 mb-3" onClick={handelclicklower}>Convert Lower</button>
            <button type="button" className="btn btn-primary mx-2 mb-3" onClick={handelclickbinary}>Convert Binary</button>
            <button type="button" className="btn btn-primary mx-2 mb-3" onClick={handelclicktext}>Convert Text</button>
            <button type="button" className="btn btn-primary mx-2 mb-3" onClick={handelclickhexa}>Convert HexaDecimal</button>
            <button type="button" className="btn btn-primary mx-2 mb-3" onClick={handelclickhexat}>Convert HexaDecimal-Text</button>
            <button type="button" className="btn btn-primary mx-2 mb-3" onClick={handelclickclear}>Clear Text</button>
        </div>
        <h1 className={`text-${props.mode==='light'?'black':'white'} my-3`}>Your Text Summary</h1>
        <div className="conatiner" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white'}}>
            <p>Your text has {text.split(" ").filter(word=>word!=="").length} words and {text.length} Characters</p>
            <p>{countVowels()} Vowels and {countConsonants()} Consonants </p>
        </div>
        </>
    );
}

export default Textform;
