import icon from './icon.png'
function Main() {
    return(
        <div>

        <div className="conteiner_main">
            <div>
                <img className="img_main" src="https://static.tildacdn.com/tild3035-3233-4261-b436-323733393866/kollektor.jpg" alt="kollektor"/>
            </div>

            <div className="conteiner_two">

                <div className="box">
                <h1 className="text_two">Хотите легко выбить деньги?</h1>
                </div>

                <div className="box_three">
                    <div className="text_one">Вы обратились по адресу!</div>
                </div>

                <div className="box_two">
                    <div className="text_one">Наши ребятки смогут легко и главное быстро выбить все долги</div>
                </div>
            </div>

            <div className="conteiner_btn">
                <button className="btn">Заказать</button>
            </div>
        </div>

        <div className="conteiner_three">
            <h1 className="taxt_three">Наши преимущества</h1>
        </div>

        <div className='box_five'>
            <div className='pod_box_two'>
                <img src={icon} alt='galakra' width='150px'/>
            </div>

            <div className='pod_box'>
            <h2 className='zagal_prem'>Качество на деле.</h2>
            <p className='opis_prem'>Вы можете оценить качество наших работников</p>
            </div>

        </div>

        <div className='box_five'>
        <div className='pod_box_two'>
            <img src={icon} alt='galakra' width='150px'/>
        </div>

            <div className='pod_box'>
            <h2 className='zagal_prem'>Официальный договор.</h2>
            <p className='opis_prem'>Правовая защита ваших интересов,заверенная</p>
            <p className='opis_prem'>на документе</p>
            </div>

        </div>

        <div className='box_five'>
        <div className='pod_box_two'>
            <img src={icon} alt='galakra' width='150px'/>
        </div>

            <div className='pod_box'>
            <h2 className='zagal_prem'>Опытное агенство в сфере колекторства.</h2>
            <p className='opis_prem'>10 лет репутации, болле 10000 выполненых работ</p>
            </div>

        </div>

        <div className='box_five'>
        <div className='pod_box_two'>
            <img src={icon} alt='galakra' width='150px'/>
        </div>

            <div className='pod_box'>
            <h2 className='zagal_prem'>Вы знаете за что вы платите.</h2>
            <p className='opis_prem'>Никаких дополнительных расходов, кроме зафиксиро-</p>
            <p className='opis_prem'>ванных в документе</p>
            </div>

        </div>

        <div className='box_five'>
        <div className='pod_box_two'>
            <img src={icon} alt='galakra' width='150px'/>
        </div>

            <div className='pod_box'>
            <h2 className='zagal_prem'>Профессионализм.</h2>
            <p className='opis_prem'>Наш клиент получает всегда высокй уровень заказа</p>
            </div>

        </div>

        </div>
    )
}

export default Main