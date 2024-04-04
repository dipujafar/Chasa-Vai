import moment from 'moment';
import usePayments from '../../../../hooks/usePayments';

const PaymentHistory = () => {
    const [payments] = usePayments();
    const reversePayment = [...payments]?.reverse() || {};
    return (
        <div>
        <h1 className="text-3xl font-medium mb-5">
          Total Payments : {payments.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Price</th>
                <th>TransactionId</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reversePayment?.map((payment,inx)=>  <tr key={payment._id}>
                <th>{inx + 1}</th>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
                <td>{moment(payment.date).format("MMM Do YY")   }</td>
              </tr>)}
            
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PaymentHistory;