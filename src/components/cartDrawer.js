import { Button, Col, Drawer, Row } from "antd";
import { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem } from "./../pages/cartPage/redux/cartSlice";
const CartDrawer = ({ onClose, isOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalPrice,setTotalPrice] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const calculatedTotalPrice = cartItems.reduce((total, item) => {
      return total + (item.finalPrice || 0); 
    }, 0);

    setTotalPrice(calculatedTotalPrice); 
  }, [cartItems]); 


  const removeCartItemHandle=(id)=>{
      dispatch(removeCartItem(id))
  }
  const cartFooterButton = () => {
    return <Row align={"middle"} justify={"space-between"}>
      <Col>
        <Row>
          Total Amount
        </Row>
        <Row style={{
          fontSize: "18px",
          fontWeight: "600"
        }}>
          <BiRupee/>{totalPrice}
        </Row>
      </Col>
      <Row>
        <Button
        disabled={cartItems.length==0}
        onClick={()=>{
            navigate('/cart')
            onClose();
        }} type="primary" >Checkout</Button>
      </Row>

    </Row>
  }
  return (
    <Drawer title="Your Cart" footer={cartFooterButton()} onClose={onClose} open={isOpen}>
      <Col>
        {
          cartItems.map((e) =>

            <Row
              align={"middle"}
              justify={"space-between"}
              style={{
                paddinge: "10px",
                marginBottom: "10px",
                backgroundColor: "var(--light-color)"
              }}>
              <Row>

                <img style={{
                  width: "50px",
                  height:"50px"
                }} src={""} />
                <Col style={{
                  marginLeft: "10px"
                }}>
                  <Row style={{
                    fontSize: "18px"
                  }}>{e.title}</Row>
                  <Row style={{
                    fontSize: "18px",
                    fontWeight: "600"
                  }}>${e.finalPrice}</Row>
                </Col>
              </Row>

              <div onClick={()=>{
                removeCartItemHandle(e.id)
              }} className="icon-button">
                <IoClose />
              </div>
            </Row>)
        }
      </Col>
    </Drawer>
  );
};


export default CartDrawer;