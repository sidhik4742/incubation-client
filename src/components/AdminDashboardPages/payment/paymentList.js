import React from 'react'


function PaymentList() {
    return (
        <>
      {/* start of incubatees table  */}
      <div
        className="table-responsive table-striped table-hover"
        // style={{ overflowX: "auto", height: "600px", overflow: "scroll" }}
        // style={{ height: "600px", overflow: "scroll" }}
      >
        <table className="table table-fixed-user">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Payment Status</th>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </table>
      </div>
    </>
    )
}

export default PaymentList
