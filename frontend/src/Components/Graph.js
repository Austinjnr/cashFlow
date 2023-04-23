import React from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from 'chart.js/auto';

const Graph = ({BarGraph}) => {
    return (  
        <section>
            <Bar data={BarGraph} />
        </section>
    );
}
 
export default Graph;