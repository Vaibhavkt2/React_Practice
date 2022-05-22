import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log('uppercase was clicked ' + text);
        let newText= text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        console.log('Lowercase was clicked ' + text);
        let newText= text.toLowerCase();
        setText(newText);
    }

    const clearClick = () => {
        
        let newText= " ";
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value);    
    }

    const [text, setText] = useState('Enter The Text Here');
   
    return (
        <>
        <div>
            <form>
            <h1>{props.textbox}</h1>
                <div className="mb-3">  
                    <textarea  className="form-control" value={text}  onChange={handleOnChange} id="box" rows="8" />    
                </div>
            </form>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearClick}>Clear Text</button>
        </div>
        <div className='container'>
            <h3>Summary Of Given Box</h3>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h3>Summary</h3>
            <p>{text}</p>

        </div>
        </>
    )
}
