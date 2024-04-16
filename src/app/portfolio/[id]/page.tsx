import React from "react";

import PortfolioId from "@/components/PortfolioId/PortfolioId";

const PortfolioIdPage = ({params}: { params: { id: string } }) => {
    console.log("params: ", params)

    return (
        <div>
            <PortfolioId/>
        </div>
    )
}

export default PortfolioIdPage;