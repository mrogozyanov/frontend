import { useState } from "react"
import { dataImg } from "./dataImg";
function Gallery() {

    const [photo, setPhoto] = useState(0);
    const {img} = dataImg[photo];

    const btnNext = () => {
        setPhoto((person => {
            person++
            if(person > dataImg.length - 1) {
                person = 0
            }
            return person
        }))
    }

    const btnBack = () => {
        setPhoto((person => {
            person--;
            if(person < 0){
                return dataImg.length - 1;
            }
            return person
        }))
    }
    return(
        <div>

            <div className="conteiner_three">
                <h1 className="taxt_three">Галерея</h1>
            </div>

            <div className="galerey">
                <button onClick={btnBack} className='btn-one-gallerey'>Back</button>
                <img src={img} alt='cat' width='700px' height='500px'/>
                <button onClick={btnNext} className='btn-two-gallerey'>Next</button>
            </div>
        </div>
    )
}

export default Gallery