import CarComponent from "./car";

async function getCar(carPath) {
    const res = await fetch(process.env.apiURL + `cars/car/${carPath}`, {next: { revalidate: 10 }});
    return res.json();
}

export default async function CarPage({params: {slug}}) {
    const data = await getCar(slug);

    return <CarComponent car={data[0]} />
}
