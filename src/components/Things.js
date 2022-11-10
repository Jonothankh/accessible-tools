import './Things.css'

const Things = (props) =>
{
    return (
        <section className="things-wrapper">
            {props.children}
        </section>
    )
}

export default Things;