import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';




const AboutUsText = () => {

    AOS.init()

return(
<div className="colorp">
   
<div data-aos="fade-left" className="aboutus">
    <h1 className="us">O нас</h1>
   
</div>
<div className="paragr">
    <p className="par4"> «Iodo Band» - невероятная кавер-группа, выступающая на самых значимых событиях, будь то свадьбы, корпоративы, банкеты, дни города и прочие праздники «с размахом». 
    Музыканты кавер группы исполняют 100% живую музыку, а их харизме и виртуозности позавидовали бы многие артисты.
    Бешеная энергетика группы, артистичность исполнителей и, конечно же, сногсшибательный вокал — это 100% составляющие успеха вашего праздника.
    </p>

</div>
</div>
)
    }

export default AboutUsText;