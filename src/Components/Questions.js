import { useState } from 'react';
import { dataQuestions } from '../dataQuestions';

function Questions() {
    const [question, setQuestion] = useState(dataQuestions);
    const [showMore, setShowMore] = useState(false);

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowMore(!showMore)
    }


    return(
        <div data-aos="fade-rigth" data-aos-duration="2000">
        
        {question.map((element => {
            const{id, question, description, showMore} = element;
      return(

       <div className='containerDelivery' key={id}>
    <div>
    <p className='question'>{question}</p>
    </div>
    <div>
    <p className='description'>{showMore ? description : description.substring(0,170) + '...'}
    <button className = 'buttonnQuestions' onClick={()=> showTextClick(element)(!showMore)}>{showMore ? '➖' : '➕'}</button></p>
    </div>
        </div>
      )
    }))}
</div>
    );
}

export default Questions;