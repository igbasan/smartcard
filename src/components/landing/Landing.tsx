import React from 'react';

import { Header } from './header/Header';
import { Content} from './content/Content';
import { Footer } from './footer/Footer';



const Landing = () => {

    return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );

}


export default Landing;