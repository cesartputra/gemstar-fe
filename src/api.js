import axios from "axios";

export const getCoinsData = async () => {
    const coins = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10')
    // console.log({coins: coins.data})
    return coins.data
}