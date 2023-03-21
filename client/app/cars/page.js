import CarsComponent from "./cars";

async function getData() {
  const res = await fetch(process.env.apiURL + 'cars/getList', { next: { revalidate: 10 } });
  return res.json();
}

export default async function CarsPage() {
  const data = await getData();

  return <CarsComponent cars={data} />;
}
