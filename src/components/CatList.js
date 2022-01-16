import { useEffect, useState } from "react/cjs/react.production.min";
import {getCats} from '../api/cats'
function CatCard({cat}){
    return (
        <div class="card flex-row mb-3">
            <img src={cat.imagge.url} class="card-img-left"></img>
            <div class="card-body">
                <p>Name: {cat.name}</p>

            </div>
        </div>
    )
}

function CatList(){
    const [cats, setCats] = useState([])

    const loadCat = async (query, sortBy)=>{
        const cat = await getCats(query, sortBy)
        console.log(cat)
        setCats(cat.data)
    }

    useEffect(()=>{
        
        loadCat(query, sortBy)
    }, [])
    const CatList = cats.map((data, id)=>{
        <CatCard></CatCard>
    }) 
    return (
        <div className="cats-list"><CatList></CatList></div>
    )
}
export default CatList;