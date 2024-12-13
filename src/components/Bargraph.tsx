import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import testStyles from '../styles/test.module.scss';

interface BarChartProps {
  data: Record<string, number>;
}

const Bargraph: React.FC<BarChartProps> = ({ data }) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    const container = svg.node()?.parentNode as HTMLElement;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    svg.attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    svg.selectAll('*').remove();

    const x = d3.scaleBand<string>()
      .domain(['Ni', 'Ne', 'Te', 'Ti', 'Fe', 'Fi', 'Se', 'Si'])
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, 8])
      .range([height - margin.bottom, margin.top]);

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickFormat(d => `${d}`)); 

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.selectAll('.bar')
      .data(Object.entries(data))
      .enter().append('rect')
      .attr('class', testStyles.bar)
      .attr('x', ([key]: [string, number]) => x(key)!)
      .attr('y', ([, value]: [string, number]) => y(value))
      .attr('width', x.bandwidth())
      .attr('height', ([, value]: [string, number]) => y(0) - y(value))
      .attr('fill', 'steelblue');
  }, [data]);

  return (
    <svg ref={ref} className={testStyles.responsiveChart}></svg>
  );
};

export default Bargraph;














