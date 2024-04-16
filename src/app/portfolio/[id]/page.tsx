import React from "react";

import PortfolioId from "@/components/Portfolio/[id]";

const PortfolioIdPage = ({params}: { params: { id: string } }) => {
    console.log("params: ", params)

    return (
        <div>
            <PortfolioId
                id={params.id}
            />
        </div>
    )
}

export default PortfolioIdPage;