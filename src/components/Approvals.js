import ApprovalsTable from "./ApprovalsTable";

const Approvals = () => {
    return(
        <>
            <div className="container mx-auto mb-4">
                <div className="grid grid-cols-12">
                    <div className="col-span-10 sm:col-span-12">
                        <h1 className="text-xl font-semibold">Recent approvals</h1>
                        <p>You can find the recent on-going approvals here</p>
                    </div>
                    <div className="col-span-2 sm:col-span-12 flex justify-end">
                        <button className="btn rounded-full btn-sm" style={{backgroundColor: '#1E67AF', color: '#FFFFFF', border: 'none'}}>+ Create new approval</button>
                    </div>
                </div>
            </div>
            <div className="grid mb-4">
                <ApprovalsTable />
            </div>
            <div className="grid mb-4">
                <a href="" className="text-sm font-bold" style={{color: '#1E67AF'}}>See all approvals here</a>
            </div>
            <div className="grid mt-4 flex justify-end">
                <p>&#169;<small>Manning&Co. 2022</small></p>
            </div>
        </>
    );
}

export default Approvals;