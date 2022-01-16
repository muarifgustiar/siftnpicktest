import { render, screen, fireEvent} from "@testing-library/react"

import SearchInput from "./SearchInput"
describe('Search Input', ()=>{
    it('should have a text input',()=>{
        render(<SearchInput />);
        expect(screen.getByTestId("search-text")).toBeInTheDocument()
    })
    
    it('should update on change',()=>{
        const setSearch = jest.fn((value) => {})
        render(<SearchInput setSearch={setSearch}/>);
        const searchInput = screen.queryByTestId('search-text')
        fireEvent.change(searchInput, { target: { value: 'persian' } })
        expect(searchInput.value).toBe('persian')
    })

    it('should delay submitted query to api', ()=>{
        const setSearch = jest.fn((value) => {})
        render(<SearchInput setSearch={setSearch}/>);
        const searchInput = screen.queryByTestId('search-text')
        fireEvent.change(searchInput, { target: { value: 'persian' } })
    })
})
