import React from 'react';

import Introduce from "@/components/Home/Introduce/Introduce";
import Welcome from "@/components/Home/Welcome/Welcome";
import Technology from "@/components/Home/Technology/Technology";
import Price from "@/components/Home/Price/Price"

const Home: React.FC = () => {
    return (
        <div>
            <Introduce/>
            <Welcome/>
            <Technology/>
            <Price/>
        </div>
    )
}

export default Home;