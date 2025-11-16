import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6,7,8,9,10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      height={300}
     // width={auto}
     width={400}
     sx={{
      boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease", // smooth hover effect
    "&:hover": {
      boxShadow: "5px 5px 20px rgba(0,0,0,0.5)",
      transform: "translateY(-5px)", // optional: slight lift effect
    },
   // border: "1px solid #ccc",
     }}
    />
  );
}
