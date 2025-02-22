import './Para.css'

export default function Para({text, fontSize = 16}) {
    return (
        <p className="para-style" style={{fontSize:`${fontSize}px`}}>
            {text}
        </p>
    );
}