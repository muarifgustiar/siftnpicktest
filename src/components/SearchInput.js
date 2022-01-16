
function SearchInput({search, setSearch}){
    return (
      <div>
        <input type="text" data-testid="search-text" onChange={
            e=>setSearch(e.target.value)
        } placeholder="Search..." value={search}></input>
      </div>
    )
}

export default SearchInput;