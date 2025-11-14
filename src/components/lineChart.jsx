import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars({tripArr}) {
  return (
    <BarChart

   
      xAxis={[{ data: [tripArr[0].Location, tripArr[1].Location, tripArr[2].Location] }]}
      series={[{ data: [4,3,5] }]}
      height={300}
    />
  );
}
