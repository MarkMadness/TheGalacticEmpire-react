import React from 'react'
import './LawOrder.css'
import Bounty from './Bounty'

function LawOrder() {
    return (
        <div>
            <h1>Law &amp; Order</h1>
            <h2>Bounty Board</h2>
        
            <div class='bounty-board-message'>
                <p>Listed below are all bounties on criminals, traitors, and rebel terrorists. Turn them
                    into the Imperial authorities and the Empire will reward you greatly!
                </p>
            </div>

            <div id='bounty-board'>
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
                <Bounty />
            </div>

        </div>

        
        
    )
}

export default LawOrder
