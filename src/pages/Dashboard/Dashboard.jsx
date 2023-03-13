import React from 'react';
import css from './Dashboard.module.css';
import { cardsData, groupNumber } from '../../data/index'
import Statistics from '../../components/Statistics/Statistics';
import Orders from '../../components/Orders/Orders';

const Dashboard = () => {

    return (
        <div className={css.container}>

            {/* left-side of dashboard*/}
            <div className={css.dashboard}>
                <div className={`${css.dashboardHead} theme-container`}>
                    <div className={css.head}>
                        <span>Dashboard</span>
                        <div className={css.durationButton}>
                            <select>
                                <option value="">1 week</option>
                                <option value="">1 month</option>
                                <option value="">1 year</option>
                            </select>
                        </div>
                    </div>
                    {/*Mapping dashboard stats here with CardsData coming from data folder*/}
                    <div className={css.cards}>
                        {
                            cardsData.map((card, index) => {
                                return (
                                    <div className={css.card} key={index}>
                                        <div className={css.cardHead}>
                                            <span>{card.title}</span>
                                            <span>{card.change}</span>
                                        </div>
                                        <div className={css.cardAmount}>
                                            <span>₹</span>
                                            <span>{groupNumber(card.amount)}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* more dashboard statistics is inside statistics component*/}
                <Statistics/>
            </div>
            {/* Orders data in dashboard coming from this component */}
            <Orders/>
        </div>
    )
}

export default Dashboard
