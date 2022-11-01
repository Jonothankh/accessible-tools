import './SearchInfo.css'

const SearchInfo = (props) =>
{
    return (
        <div className={"introduction-section " + (props.filteredTotal === props.thingsTotal ? "hidden" : "")}>
            {
                props.filteredTotal === props.thingsTotal ? <></> :
                    props.filteredTotal > 0 ?
                        <p className="search-subtitle">{props.filteredTotal} result{props.filteredTotal > 1 && "s"}</p> :
                        <p className="search-subtitle">I'm working on adding more things to this list!</p>
            }
        </div>
    )
}

export default SearchInfo;