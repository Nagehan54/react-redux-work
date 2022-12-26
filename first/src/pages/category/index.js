import { useParams } from "react-router-dom"

function Category(){
const params = useParams() 

    return(
        <div>
          Burası category sayfasıdır.
        </div>
    )
}

export default Category