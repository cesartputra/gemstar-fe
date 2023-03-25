import { useEffect, useState } from 'react';
import { getCoinsData } from '../api';
const ApprovalsTable = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        getCoinsData().then((result) => {
            setCoins(result)
        })
    }, [])

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

    const CoinList = () => {
        return coins.map((coin, i) => {
            return(
                <tr className="hover" key={i}>
                    <th>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={coin.image} alt={coin.id} />
                                </div>
                            </div>
                        </div>
                    </th>
                    <td>{coin.name}</td>
                    <td>{rupiah(coin.current_price)}</td>
                    <td>{rupiah(coin.market_cap)}</td>
                </tr>
            )
        })
    }

    console.log(coins)

    return(
        <>
            <div className="overflow-x-auto w-full">
                <table className="table table-normal w-full table-bordered">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Current price</th>
                            <th>Market cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CoinList />
                    </tbody>
                </table>
            </div>

            {/* <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Clients</th>
                        <th>Approval name</th>
                        <th>Client contact</th>
                        <th>Owner</th>
                        <th>Date issued</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="hover">
                        <th>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td>DBS DEG renewal energy LinkedIn post tiles...</td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm opacity-50">Jasmine</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm opacity-50">Radhika</div>
                                </div>
                            </div>
                        </td>
                        <td>January 23, 2022</td>
                        <td>
                            <div className="alert alert-warning shadow-lg">
                                <div>
                                    <span>In progress</span>
                                </div>
                            </div>
                        </td>
                    </tr>

                    <tr className="hover">
                        <th>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </th>
                        <td>DBS DEG renewal energy LinkedIn post tiles...</td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm opacity-50">Jasmine</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm opacity-50">Radhika</div>
                                </div>
                            </div>
                        </td>
                        <td>January 23, 2022</td>
                        <td>
                            <div className="alert alert-warning shadow-lg">
                                <div>
                                    <span>In progress</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    
                    </tbody>
                </table>
            </div> */}
        </>
    );
}

export default ApprovalsTable;