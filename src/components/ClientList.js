const ClientList = () => {
    return(
        <>
            
            <div className="grid gap-4 my-4">
                <h1 className="text-4xl font-bold">Hi Cesar, welcome back!</h1>
            </div>
            <div className="grid mb-4 pt-5">
                    <h2 className="text-xl font-semibold">Your client list</h2>
                    <p>You currently servicing 3 clients</p>
            </div>
            <div className="grid mb-4 pt-5">
                <div className="flex">
                    <div className="carousel carousel-center p-2 space-x-4 rounded-box">
                        <div className="card card-bordered w-80 carousel-item">
                            <div className="card-body">
                                <div className="card-actions justify-end">
                                <a className="btn btn-ghost">
                                    ...
                                </a>
                                </div>
                                <img src="./images/dbs-logo.png" className="w-32 pb-4" />
                                <h2 className="card-title">DBS Bank</h2>
                                <p>DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.</p>
                            </div>
                        </div>
                        <div className="card card-bordered w-80 carousel-item">
                            <div className="card-body">
                                <div className="card-actions justify-end">
                                <a className="btn btn-ghost">
                                    ...
                                </a>
                                </div>
                                <img src="./images/proudfoot-logo.png" className="w-32 pb-4" />
                                <h2 className="card-title">Proudfoot</h2>
                                <p>Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.</p>
                            </div>
                        </div>
                        <div className="card card-bordered w-80 carousel-item">
                            <div className="card-body">
                                <div className="card-actions justify-end">
                                <a className="btn btn-ghost">
                                    ...
                                </a>
                                </div>
                                <img src="./images/rmi-logo.png" className="w-32 pb-4" />
                                <h2 className="card-title">RMI</h2>
                                <p>RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientList;