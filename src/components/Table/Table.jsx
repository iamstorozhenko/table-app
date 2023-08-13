import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>
              <h4>Referral Event</h4>
            </th>
            <th>
              <h4>Advocate</h4>
            </th>
            <th>
              <h4>Friend</h4>
            </th>
            <th>
              <h4>Referral status</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4>Purchase</h4>
              <h5>06/17/2020 at 7:13 PM PDT</h5>
              <div className="price">$120.00</div>
            </td>
            <td>
              <h4>autouser23926@gmail...</h4>
              <p>Advocate</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>Ffr58272@gmail.com</h4>
              <p>Friend</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>Pending</h4>
              <h5>Passed fraud checks</h5>
              <div>&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Purchase</h4>
              <h5>07/10/2020 at 4:05 AM PDT</h5>
              <div className="price">$100.00</div>
            </td>
            <td>
              <h4>ad0379118142@gmail.c..</h4>
              <p>Advocate</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>Ffr0379118142@gmail.com</h4>
              <p>Friend</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>Flagged</h4>
              <h5 className="red-flag">Marked as fraud</h5>
              <div>&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Purchase</h4>
              <h5>06/09/2020 at 12:42 PM PDT</h5>
              <div className="price">$28.00</div>
            </td>
            <td>
              <h4>ad56991@gmail.com</h4>
              <p>Advocate</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>fr94250@gmail.com</h4>
              <p>Friend</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>Approved</h4>
              <h5>Passed fraud checks</h5>
              <div>&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Purchase</h4>
              <h5>08/07/2020 at 4:20 AM PDT</h5>
              <div className="price">$100.00</div>
            </td>
            <td>
              <h4>user.to.be.blocked92187...</h4>
              <p>Advocate</p>
              <div className="blank">&nbsp;</div>
            </td>
            <td>
              <h4>user.to.be.blocked2682...</h4>
              <p>Friend</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>Blocked</h4>
              <h5 className="red-flag">Marked as fraud</h5>
              <div>&nbsp;</div>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Purchase</h4>
              <h5>06/09/2020 at 2:08 AM PDT</h5>
              <div className="price">$100.00</div>
            </td>
            <td>
              <h4>ad0693677382@gmail...</h4>
              <p>Advocate</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>fr0693677382@gmail.c...</h4>
              <p>Friend</p>
              <div>&nbsp;</div>
            </td>
            <td>
              <h4>Voided</h4>
              <h5 className="red-flag">Marked as fraud</h5>
              <div>&nbsp;</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
