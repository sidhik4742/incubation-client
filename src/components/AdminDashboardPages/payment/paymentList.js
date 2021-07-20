import React, { useEffect, useState } from "react";
import moment from "moment";
import { getallsubscribers } from "../../../routes/subscribers";

function PaymentList() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const getSubscribers = async () => {
      let allSubscribers = await getallsubscribers();
      console.log(allSubscribers);
      setSubscribers(allSubscribers);
    };
    getSubscribers();
  }, []);

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
              <th>Manager Name</th>
              <th>Company Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {subscribers
              ? subscribers.map((subscriber, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{subscriber.managerName}</td>
                    <td>{subscriber.companyName}</td>
                    <td>{subscriber.amount}</td>
                    <td>{moment(subscriber.date).format("MM/DD/YYYY")}</td>
                    <td>
                      {subscriber.paymentStatus ? subscriber.orderId : "Failed"}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PaymentList;
