import './Button.css'

export default function Button({text, onClick}) {
    return (
        <button className="button-style" onClick={onClick}>
            {text}
        </button>
    );
}