import type { Metadata } from 'next'
import CarComponent from "./car";

async function getCar(carPath) {
    const res = await fetch(process.env.apiURL + `cars/car/${carPath}`, {next: { revalidate: 10 }});
    return res.json();
}

export async function generateMetadata({ params }): Promise<Metadata> {
    const res = await getCar(params.slug);
    const car = res[0]
    return {  
        title: `${car.brand} ${car.model} | KOZACKIEFURY`,
        description: car.description,
        robots: 'index,follow',
        openGraph: {
            title: `${car.brand} ${car.model} | KOZACKIEFURY`,
            description: car.description,
            type: 'website'
        }
    }
}

export default async function CarPage({params: {slug}}) {
    const data = await getCar(slug);

    return <CarComponent car={data[0]} />
}
