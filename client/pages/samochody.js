import api from '../utils/api'

export const getStaticProps = async() => {
    const res = await api.get('/cars/getList');
    return {
        props: {cars: res.data}
    }
}

const Cars = ({cars}) => {
    return <div style={{margin: '1rem'}}>
        <h2>Samochody</h2>
        {cars.map(car => <div key={car._id}>{car.brand} {car.model} - {car._id}</div>)}
    </div>
}  

export default Cars;