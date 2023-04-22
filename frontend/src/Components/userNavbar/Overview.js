import React from "react";
import { Bar } from "react-chartjs-2"

const BarGraph = ({bar}) => {
    return ( 
        <Bar data={bar} options={}/>
     );
}
 
export default BarGraph;