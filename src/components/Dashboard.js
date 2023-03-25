import Approvals from "./Approvals";
import ClientList from "./ClientList";

const Dashboard = () => {
    return(
        <>
            <div className="dashboard p-4 sm:ml-64">
        
                <div className="p-4 mt-14">
                
                    <ClientList />
                    
                    <Approvals />
                </div>
            </div>
        </>
    );
}

export default Dashboard;