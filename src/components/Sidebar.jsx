import SocialNetworks from './SocialNetworks';

import avatar from'../img/img.jpg'

import style from '../styless/components/sidebar.sass'
import InformationContainer from './InformationContainer';

const sidebar = () => {
  return <aside id="sidebar">
    <img src={avatar} alt="Wendell Almeida"  />
    <p className="title">Desenvolvedor FullStack</p>
   <SocialNetworks/>
    <InformationContainer/>
    <a href="" className="btn">Download currículo</a>

  </aside>;
};
export default sidebar