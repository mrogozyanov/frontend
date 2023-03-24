import { useState } from "react"
import { dataCollectors } from "./dataCollectors"
function Collectors() {
    const [colector] = useState(dataCollectors);
    return(
        <div>

        
        <div className="conteiner_zagal">
        <h1>Наши Коллекторы</h1>
    </div>

        <div className="conteiner_colector">

            {colector.map((item => {
                const {name, weight, img, old, id} = item;
                return(
                    <div key={id}>
                        
                            <div>
                            <img src={img} alt='people' width='400px' height='500px'/>
                            <h3>Позывной: {name}</h3>
                            <h3>Вес: {weight}</h3>
                            <h3>Возраст: {old}</h3>
                        </div>
                    </div>
                )
            }))}
        </div>
        </div>
    )
}

export default Collectors