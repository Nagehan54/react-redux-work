import useApi from "../../hooks/useApi"
import {useEffect, useState} from 'react'
import ItemBox from "../../components/item_box"

function Home() {
    const api = useApi()

    const[categoryBoxes, setCategoryBoxes] = useState([])

    useEffect(()=>{
        api.get('https://api.adoptez1artisan.com/public/categories/listMainCategories')
     .then(response =>{
        const tempCategoryBoxes =[]
        response.data.data.map((item, index)=>{
            console.log('>>item', index, item)

            tempCategoryBoxes.push(<ItemBox key={index} id={item.id} name={item.name} image={item.image} slug={item.slug}/>)
        })
       setCategoryBoxes(tempCategoryBoxes)
     })

    },[])
    
    
     return (
        <main>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">Hizmet Bulma Projesi</h1>
                <p className="fs-5 text-muted">Aşağıdaki kategorilere tıklayabilirsiniz.</p>
            </div>

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {categoryBoxes}
                
            </div>

        </main>
    )
}

export default Home