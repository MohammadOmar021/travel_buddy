import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars({tripArr}) {
  return (
    <BarChart

   
      xAxis={[{ data: [tripArr[0].Location, tripArr[1].Location, tripArr[2].Location] }]}
      series={[{ data: [4,3,5] }]}
      height={300}
      width={400}
      sx={{
      boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease", // smooth hover effect
    "&:hover": {
      boxShadow: "5px 5px 20px rgba(0,0,0,0.5)",
      transform: "translateY(-5px)", // optional: slight lift effect
    },
    //border: "1px solid #ccc",
     }}
    />
  );
}
