import './SearchInfo.css'

const SearchInfo = (props) =>
{
    return (
        <div className={"introduction-section " + (props.filteredTotal === props.thingsTotal ? "hidden" : "")}>
            {
                props.filteredTotal === props.thingsTotal ? <></> :
                    props.filteredTotal > 0 ?
                        <p className="search-subtitle">{props.filteredTotal} result{props.filteredTotal > 1 && "s"}</p> :
                        <p className="search-subtitle">Nothing found matching your search.</p>
            }
        </div>
    )
}

export default SearchInfo;