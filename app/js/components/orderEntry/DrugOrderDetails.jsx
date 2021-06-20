import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from "react-intl";

const DrugOrderDetails = ({
  details, activeDates, orderer,
}) => {
  /* TODO: The order object doesn't contain the details of the drug seperated into each respective
   field. Everything is grouped in the "display" field. We should update the contents of the order
   object to maintain the original fields so that we can display that here versus "display". */
  const formattedDetails = details.replace("(NEW)", "")

  return (
    <div className="order-details">
      <div className="details">
        <ul className="details-section">
          <b className="order-details-titles">
            <FormattedMessage
              id="app.orders.details"
              defaultMessage="Details" />:
          </b> {formattedDetails}
        </ul>
        <ul className="details-section">
          <b className="order-details-titles"> 
            <FormattedMessage
              id="app.orders.dateAdministered"
              defaultMessage="Date Administered" />:
          </b> {activeDates}
        </ul>d
        <p><FormattedMessage
          id="app.orders.orderedBy"
          defaultMessage="Ordered by" /> {orderer}
        </p>
      </div>
    </div>
  )
}

export default DrugOrderDetails;

DrugOrderDetails.defaultProps = {
  activeDates: '',
  orderer: '',
  details: '',
};

DrugOrderDetails.propTypes = {
  activeDates: PropTypes.string,
  orderer: PropTypes.string,
  details: PropTypes.string,
};
