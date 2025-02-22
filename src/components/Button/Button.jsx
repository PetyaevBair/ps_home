import './Button.css'

export default function Button({text}) {
    return (
        <button className="button-style" >
            {text}
        </button>
    );
}