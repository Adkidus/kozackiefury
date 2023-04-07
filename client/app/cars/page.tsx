import type { Metadata } from 'next'

import CarsComponent from "./cars";

export const metadata: Metadata = {
  title: 'FLOTA | KOZACKIE FURY',
  description: 'Kozackie Fury to marka, która z pewnością spełni oczekiwania każdego, kto poszukuje wyjątkowego pojazdu na swoje wydarzenie',
  robots: 'index,follow', 
  openGraph: {
    title: 'FLOTA | KOZACKIE FURY',
    description: 'Kozackie Fury to marka, która z pewnością spełni oczekiwania każdego, kto poszukuje wyjątkowego pojazdu na swoje wydarzenie',
    type: 'website'
  }
};

async function getData() {
  const res = await fetch(process.env.apiURL + 'cars/getList', { next: { revalidate: 10 } });
  return res.json();
}

export default async function CarsPage() {
  const data = await getData();

  return <CarsComponent cars={data} />;
}
