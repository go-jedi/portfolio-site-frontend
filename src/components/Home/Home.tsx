import React from 'react';

import Introduce from "@/components/Home/Introduce/Introduce";
import Welcome from "@/components/Home/Welcome/Welcome";
import Technology from "@/components/Home/Technology/Technology";

const Home: React.FC = () => {
    return (
        <div>
            <Introduce/>
            <Welcome/>
            <Technology/>
        </div>
    )
}

export default Home;