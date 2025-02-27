import React from 'react'
import TicketSummary from './TicketSummary'
import BookingSummary from './BookingSummary'

function Summary() {
  return (
    <div className='flex flex-col md:flex-row gap-5 justify-center '>
        <TicketSummary/>
        <BookingSummary/>
    </div>
  )
}

export default Summary