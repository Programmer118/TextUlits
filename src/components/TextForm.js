import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
   
    const Upper = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case",'success');
    }
    const lowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case",'success');
    }
    
    const handle = (event)=>{
        setText(event.target.value);


    }

    
   const handleCopy =()=>{
        var text = document.getElementById('mybox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard",'success')
    
    }


    const handleSpace =()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
        props.showAlert("Removed Extra Space",'success')
    };


    const Title = (str) => {
        const string = str
        .toLowerCase()
        .split(" ")
        .map(word => {
           return word[0]
           .toUpperCase() + word.substr(1, word.length);
        })
        .join(" ");
        return string;
     }
    
    
     const chTitle =()=>{
        let dtext = Title(text)
        setText(dtext)
        props.showAlert("Converted to Title case",'success')

    };
     const clear =()=>{
        let dtext = ''
        setText(dtext)
    };
    /* A state variable. */
  const [text, setText] = useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label html-for="mybox" className="form-label">{props.example}</label>
            <textarea className="form-control" value={text} onChange={handle} style={{backgroundColor: props.mode==="dark"?"#212521":'white',color:props.mode==="dark"?"white":'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={Upper}> Upper</button>
        <button className="btn btn-primary my-2 mx-2" onClick={lowerCase}> lowre</button>
        <button className="btn btn-primary my-2 mx-2" onClick={chTitle}> Title</button>
        <button className="btn btn-primary my-2 mx-2" onClick={clear}> Clear</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}> Copy</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleSpace}> Remove Extar Space</button>
    </div>
    <div className="container my-3 mx-2 " style={{color:props.mode==="dark"?"white":'black'}}>
        <h3>Your Summary</h3>
        <p>Charecters: {text.length} and Words: {text.split(" ").length-1}</p>
        <div className='container mx-2' style={{border:'2px solid green'}}>
            <h6>Time take to read </h6>
        
            <ui>
                <li>
                    Slow: {(0.008 * text.length)*60} Seconds
                </li>
                <li>
                    Average: {(0.0013*text.length)*60} Seconds
                </li>
                <li>
                    Fast: {(0.0006 * text.length)*60} Seconds
                </li>
            </ui>
        </div>
         <div className='container my-3' style={{color:"gray"}}>
            <h5><strong>Preview</strong></h5>
            <p>{text.length>0?text:'Enter Your Text Above'}</p>

        </div>   
       </div>

    </>
  )
}
TextForm.propTypes={
    heading: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired, 
};

TextForm.defaultProps = {
    heading: "undefined",
    example : "Enter Text below...",
};