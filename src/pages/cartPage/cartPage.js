import "./style.css";
import {  CgRemove } from "react-icons/cg";
import { MdDone } from "react-icons/md";
import { BiMinus, BiPlus, BiRupee } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const { Layout, message, Row, Col, Divider, Button } = require("antd");
const CartPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice,setTotalPrice] = useState(0);
  useEffect(() => {
    const calculatedTotalPrice = cartItems.reduce((total, item) => {
      return total + (item.finalPrice || 0); 
    }, 0);
    setTotalPrice(calculatedTotalPrice); 
  }, [cartItems]); 



  return (
    <Layout
      className="body-container"
      style={{
        minHeight: "100vh",
      }}
    >
      {contextHolder}
      <br></br>
      <br></br>
      <br></br>
      <Row
        justify={"space-between"}
        style={{
          gap: "10px",
        }}
      >
        <Col sm={15} className="cart-item-box">
          <Row className="body-heading">Cart Items</Row>
          <Divider />
          <Col>
            {cartItems.map((e) => (
              <Row
                align={"middle"}
                justify={"space-between"}
                style={{
                  paddinge: "10px",
                  marginBottom: "10px",
                  backgroundColor: "var(--light-color)",
                }}
              >
                <Row>
                  <img
                    style={{
                      width: "70px",
                      height:"70px"
                    }}
                    src={""}
                  />
                  <Col
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    <Row
                      style={{
                        fontSize: "18px",
                      }}
                    >
                      {e.title}
                    </Row>
                    <Row
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      ${e.finalPrice}
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <div className="icon-button-my">
                    <CgRemove />
                  </div>
                </Row>
              </Row>
            ))}
            <Row>
              <Button
                className="primary-button"
                icon={<MdDone />}
                type="primary"
              >
                CONTINUE
              </Button>
            </Row>
          </Col>
        </Col>
        <Col sm={8} className="cart-calculation-box">
          <Row className="body-heading ">Price details</Row>
          <Divider />
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-heading">MRP Price</div>
            <Row align={"middle"  } className="lable-heading">
              <BiRupee />
              {totalPrice}
            </Row>
          </Row>
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-body">Discounts</div>
            <Row align={"middle"  } className="lable-heading">
              <BiMinus />
              00.00
            </Row>
          </Row>
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-body">Delivery price</div>
            <div>
              <BiPlus />
              00.00
            </div>
          </Row>
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-body">Platform fee</div>
            <Row align={"middle"  } className="lable-heading">
              <BiPlus />
              00.00
            </Row>
          </Row>
          <Divider />
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-heading">Total Amount</div>
            <Row align={"middle"  } className="lable-heading">
              <BiRupee />
              {totalPrice}
            </Row>
          </Row>
          <Divider />
          <Row justify={"center"}>You will save ₹00.00 on this order</Row>
          <br></br>
          <Row>
            <Button className="primary-button" icon={<MdDone />} type="primary">
              CONTINUE
            </Button>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default CartPage;
