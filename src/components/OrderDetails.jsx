import { Button, Collapse, Divider, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from '../axios'
import { UpdateOrder } from '../redux/slice/order'
const { Panel } = Collapse

const OrderDetails = ({ cart, closeCart }) => {
    const dispatch = useDispatch()
    const [receiptloading, setreceiptloading] = useState(false)
    const [billloading, setbillloading] = useState(false)
    const [ebillloading, setebillloading] = useState(false)
    return (

        <Modal width={400} open={cart} onCancel={closeCart} footer={false} style={{ top: "50px" }}>

            <Collapse size="small" ghost >
                <Panel header={`Check Cart ${cart?.cart?.length} Items`} key="1">
                    {
                        cart?.cart?.length > 0 && cart?.cart?.map((e, i) => (
                            <p key={i}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>
                                        <b>{i + 1}. {e.title}</b> &ensp;
                                        <small>({e.qnt} pcs)</small>
                                    </div>
                                    <b>₹ {e.qnt * e.amount}.00</b>
                                </div>
                                {e.desc} </p>
                        ))}
                </Panel>
            </Collapse>

            {/* <QRCode value="" /> */}

            <Divider> Payment Details </Divider>

            {/* cart amount  */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Cart amount : </span>
                <span>₹ {cart?.payment?.cart && cart.payment.cart}.00</span>
            </div>
            {/* taxex amount  */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Taxes amount : </span>
                <span>₹ {(cart?.payment?.taxes && cart.payment.taxes) || 0.00}</span>
            </div>
            {/* coupon discount amount  */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Discount amount : </span>
                <span>₹ -{(cart?.payment?.discount && cart.payment.discount) || 0}.00</span>
            </div><hr color='lightgray' />
            {/* this is for grand total  */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Grand total : </span>
                <span>₹ {cart?.payment?.total && cart.payment.total}</span>
            </div>
            {/* this is for payment status */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Payment Status : </span>
                <span>{cart?.payment?.id ? "Success" : "Failed"}</span>
            </div>
            {/* this is for payment id */}
            {cart?.payment?.id && <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Payment Id : </span>
                <span>{cart?.payment?.id && cart.payment.id}</span>
            </div>}
            {!cart?.details?.gstin && <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Receipt : </span>
                {cart?.receipt ? <Link target="blank" to={cart?.receipt}>open receipt</Link> : <Button loading={receiptloading} size="small"><label htmlFor='receipt'>Upload</label></Button>}
            </div>}
            <input accept='image/*' style={{ display: "none" }} id='receipt' type="file"
                onChange={async (e) => {
                    setreceiptloading(true);
                    var data = new FormData();
                    data.append("file", e.target.files[0])
                    var res = await axios.post("upload/bill", data);
                    await dispatch(UpdateOrder(cart?._id,{ 
                        receipt: res?.data?.path
                    }));
                    setreceiptloading(false);
                    closeCart()
                }} />

            {cart?.details?.gstin && <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Bill : </span>
                {cart?.bill ? <Link target="blank" to={cart?.bill}>open bill</Link> : <Button loading={billloading} size="small"><label htmlFor='bill'>Upload</label></Button>}
            </div>}
            <input accept='image/*' name='file' style={{ display: "none" }} id='bill' type="file"
                onChange={async (e) => {
                    setbillloading(true);
                    var data = new FormData();
                    data.append("file", e.target.files[0])
                    var res = await axios.post("upload/bill", data);
                    await dispatch(UpdateOrder(cart?._id,{ 
                        bill: res?.data?.path
                    }));
                    setbillloading(false);
                    closeCart()
                }} />
            {cart?.details?.gstin && cart?.payment?.total > 50000 && <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Eway Bill : </span>
                {cart?.ebill ? <Link target="blank" to={cart?.ebill}>open eway bill</Link> : <Button loading={ebillloading} size="small"><label htmlFor='ebill'>Upload</label></Button>}
            </div>}
            <input accept='image/*' style={{ display: "none" }} id='ebill' type="file"
                onChange={async (e) => {
                    setebillloading(true);
                    var data = new FormData();
                    data.append("file", e.target.files[0])
                    var res = await axios.post("upload/bill", data);
                    await dispatch(UpdateOrder(cart?._id,{ 
                        ebill: res?.data?.path
                    }));
                    setebillloading(false);
                    closeCart()
                }} />
            <br />

            <Divider> Other Details </Divider>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Customer Name : </span>
                <span>{cart?.details?.username && cart.details.username}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> Phone : </span>
                <span>+91 {cart?.details?.phone && cart.details.phone}</span>
            </div>
            {cart?.details?.gstin?.length > 0 && <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span> GSTIN : </span>
                <span>{cart?.details?.gstin}</span>
            </div>}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "150px" }}> Address : </div>
                <p style={{ textAlign: "right" }}>{cart?.details?.address && cart.details.address}</p>
            </div>

            <br />
        </Modal>

    )
}

export default OrderDetails