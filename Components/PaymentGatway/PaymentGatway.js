// upder transacation
const updateOrder = (tId, oId) => {
    axios
      .put(`${process.env.REACT_APP_API}/updateTransactionId/${oId}`, {
        transactionId: tId,
      })
      .then((res) => {
        setSuccess(res?.data?.data);
        dispatch(
          getOrderByUserId({
            url: `${process.env.REACT_APP_API}/getAllOrderByUserId/${userId}`,
          })
        );
        setPayModal(false);
        setOrderSuccessModal(true);
      });
  };

  // function for razorpay
  function OrderPayment(ev, orderDetails) {
    if (ev !== "") {
      const Description = (
        <p dangerouslySetInnerHTML={sanitizedData(company?.description)} />
      );
      const options = {
        key: process.env.RAZORPAY_KEY,
        amount: Math.ceil(orderDetails?.payableAmount) * 100,
        currency: "INR",
        name: company?.site_name,
        description: Description,
        // image: `${process.env.NEXT_PUBLIC_API_URL}/${Company?.header_logo}`,
        handler: (response) => {
          updateOrder(response?.razorpay_payment_id, ev);
        },
        prefill: {
          name: company?.site_name,
          contact: company?.phone,
        },
        notes: {
          order_id: ev,
        },
        modal: {
          ondismiss: () => {
            // dispatch(resetCart());
            // dispatch(setOrderDetails(null));
            // navigate(`/OrderDetailPage`);
            // navigate("/profileDashboard", { state: { Order: 1 } });
            // navigate(`/OrderDetailPage/${ev}`);
          },
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        console.log(response.error.metadata.payment_id);
      });

      rzp1.open();
    } else {
      console.log("Missing Order Id");
    }
  }

  // function for retry payment
  const continuePayment = () => {
    if (paymentMethod === "RAZORPAY") {
      OrderPayment(
        getAllOrders?.[selectedProduct]?._id,
        getAllOrders?.[selectedProduct]
      );
    }
  };