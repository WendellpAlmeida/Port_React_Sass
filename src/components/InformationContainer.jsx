import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styless/components/informationcontainer.sass';

const InformationContainer = () => {
  return  <section id="information">
   <div className="info-card">
    <AiFillPhone id="phone-icon" />
        <div>
            <h3>Telefone</h3>
            <p> +55(11)96627-0000</p>
        </div>
    </div> 
    <div className="info-card">
    <AiOutlineMail id="email-icon" />
        <div>
            <h3>E-mail</h3>
            <p>Wendellpalmeida@outlook.com</p>
        </div>
    </div> 
    <div className="info-card">
    <AiFillEnvironment id="pin-icon" />
         <div>
            <h3>Localização</h3>
            <p> Getúlio Vargas / RS</p>
        </div>
    </div> 
</section>
};

export default InformationContainer