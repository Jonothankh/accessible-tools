import './Things.css'

const Things = (props) =>
{
    return (
        <div className="things-wrapper">
            {props.children}
        </div>
    )
}

export default Things;