import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IProduct {
  id: string;
  image: string;
  taste: string;
  capacity: number;
  price: number;
  count: number;
}

const products = [
  {
    id: '1',
    image: 'cucumber.png',
    taste: 'Cucumber',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '2',
    image: 'strawberryEnergy.png',
    taste: 'Strawberry Energy',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '3',
    image: 'neonRain.png',
    taste: 'Neon Rain',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '4',
    image: 'grapeEnergy.png',
    taste: 'Grape Energy',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '5',
    image: 'blueberry.png',
    taste: 'Blueberry',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '6',
    image: 'blueRazz.png',
    taste: 'Blue Razz Lemonade',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '7',
    image: 'coconutMelon.png',
    taste: 'Coconut Melon',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '8',
    image: 'cola.png',
    taste: 'Cola',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '9',
    image: 'rose.png',
    taste: 'Rose',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '10',
    image: 'watermelon.png',
    taste: 'Watermelon',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '11',
    image: 'guavaIce.png',
    taste: 'Guava Ice',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '12',
    image: 'redMojito.png',
    taste: 'Red Mojito',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '13',
    image: 'strawberryIceCream.png',
    taste: 'Strawberry Ice Cream',
    capacity: 3000,
    price: 420,
    count: 1
  },
  {
    id: '14',
    image: 'blueberrIce.png',
    taste: 'Blueberry ice',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '15',
    image: 'coconutMelon2.png',
    taste: 'Coconut Melon',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '16',
    image: 'blueRazz2.png',
    taste: 'Blue Razz Lemonade',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '17',
    image: 'colaIce.png',
    taste: 'Cola Ice',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '18',
    image: 'grapeEnergy2.png',
    taste: 'Grape Energy',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '19',
    image: 'energy.png',
    taste: 'Energy',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '20',
    image: 'guavaIce2.png',
    taste: 'Guava Ice',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '21',
    image: 'panMasala.png',
    taste: 'Pan Masala Supreme',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '22',
    image: 'neonRain2.png',
    taste: 'Neon Rain',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '23',
    image: 'redMojito2.png',
    taste: 'Red Mojito',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '24',
    image: 'rose2.png',
    taste: 'Rose',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '25',
    image: 'strawberryIce2.png',
    taste: 'Strawberry Ice Cream',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '26',
    image: 'watermelonIce.png',
    taste: 'Watermelon Ice',
    capacity: 2000,
    price: 340,
    count: 1
  },
  {
    id: '27',
    image: 'blueberrIce.png',
    taste: 'Blueberry ice',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '28',
    image: 'coconutMelon2.png',
    taste: 'Coconut Melon',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '29',
    image: 'blueRazz2.png',
    taste: 'Blue Razz Lemonade',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '30',
    image: 'colaIce.png',
    taste: 'Cola Ice',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '31',
    image: 'grapeEnergy2.png',
    taste: 'Grape Energy',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '32',
    image: 'energy.png',
    taste: 'Energy',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '33',
    image: 'guavaIce2.png',
    taste: 'Guava Ice',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '34',
    image: 'panMasala.png',
    taste: 'Pan Masala Supreme',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '35',
    image: 'neonRain2.png',
    taste: 'Neon Rain',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '36',
    image: 'redMojito2.png',
    taste: 'Red Mojito',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '37',
    image: 'rose2.png',
    taste: 'Rose',
    capacity: 1000,
    price: 260,
    count: 1
  },
  {
    id: '38',
    image: 'strawberryIce2.png',
    taste: 'Strawberry Ice Cream',
    capacity: 1000,
    price: 260,
    count: 1
  },
]

interface IProductState {
  product: IProduct[];
}

const initialState: IProductState = {
  product: products,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
})


export default productSlice.reducer;