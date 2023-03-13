import React from 'react'
import { groupNumber, ordersData } from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src='./logo.png' alt='logo' />
                <span>Orders Today</span>
            </div>
            <div className={`${css.stat} grey-container`}>
                <span>Amount</span>
                <span>₹ {groupNumber(1100)}</span>
            </div>
            <div className={css.orders}>
                {/*Mapping dashboard stats here with ordersData coming from data folder*/}
                {
                    ordersData.map((order, index) => {
                        return (
                            <div className={css.order} key={index}>
                                <div>
                                    <span>{order.name}</span>
                                    <span>₹ {order.change}</span>
                                </div>
                                <div>
                                    <span>{order.type}</span>
                                    <span>Items: {order.items}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={css.orderChart}>
                <span>Split by orders</span>
                <OrdersPieChart/>
                {/* Pie designed chart coming from this component */}
            </div>
        </div>
    )
}

export default Orders
