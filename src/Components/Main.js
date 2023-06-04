import React from 'react'
import Mainpage from './Mainpage'
import { datas } from '../Datas/Data'
import Chart from './Chart'
import Charted from './Charted'


const Main = () => {
  return (
    <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
    </div>
    <div className="row">
      {datas.map((prod,idx)=>
      <Mainpage
      profileName ={prod.profile_name}
      profileValue ={prod.profile_Money}
      />
      )}
      </div>
      <Chart/>
      <Charted/>
       {/* <div >
      <Chart2/>
      </div>  */}
    </div>
  )
}

export default Main