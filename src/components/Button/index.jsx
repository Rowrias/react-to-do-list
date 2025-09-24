import './button.style.css'

export default function Button ( { children, ...rest }) {
    return (
        <button {...rest} className='btn'>
            { children }
        </button>
    )
}
