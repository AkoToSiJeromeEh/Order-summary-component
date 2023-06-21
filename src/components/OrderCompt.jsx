import "../../css/Main.min.css";
import PropTypes from "prop-types";
function OrderCompt(props) {
  const { orderImage, orderTitle, orderDescription,  orderPrice } =
    props;
  return (
    <section className="order--summary--section">
      <div className="order--summary--wrapper">
        <div className="order--img">
          <img src={orderImage} alt="" />
        </div>
        <div className="order--contents">
          <div className="context--cont">
            <h1>{orderTitle}</h1>
            <p>{orderDescription}</p>
          </div>
          <div className="plan--cont">
            <div className="music--ico">
            <i className="  fa-solid fa-compact-disc"></i>
            </div>
            <div className="annual-plan">
              Annual Plan<br></br>
              <span>${orderPrice}/year</span>
            </div>
            <div className="change-link">
              <a href="">Change</a>
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-payment">
              Proceed to Payment
            </button>
            <button className="btn-cancel">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderCompt;

OrderCompt.propTypes = {
  orderImage: PropTypes.string.isRequired,
  orderDescription: PropTypes.string.isRequired,
  orderTitle: PropTypes.string.isRequired,
  orderPrice: PropTypes.number.isRequired,
};
