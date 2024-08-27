import React, { useContext } from 'react';
import TotalEarning from './TotalEarning';
import { Mycontext } from '../../utils/Context';
import RecentTransactions from './RecentTransactions';
import RecentCampaigns from './RecentCampaigns';
import CampaignsCard from './CampaignsCard';

const Dashboard = () => {

    const contextState = useContext(Mycontext);
    const expanded = contextState.expanded;

    return (
        <div
            className={`flex h-screen relative ${!expanded ? "left-[100px] w-[calc(100%-110px)]"
                : "left-[320px] w-[calc(100%-320px)]"
                }  overflow-y-auto    p-3`}
        >
            <div className=' '>
                <div className='flex gap-12'>
                    <div>
                        <TotalEarning  expanded={expanded}/>
                    </div>
                    <div className='mt-5'>
                        <CampaignsCard expanded={expanded}/>
                    </div>
                </div>

                <div className=' flex gap-12 mt-7 mb-2'>
                    <div className='ml-2'>
                        <RecentTransactions expanded={expanded} />
                    </div>
                    <div className=''>
                        <RecentCampaigns expanded={expanded}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard