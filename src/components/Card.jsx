import React from 'react'
import Tag from './Tag'
import getImageSrc from './getImageSrc'
import './styles/Card.css'

const doneIcon = '/icons/status/Todo.svg'
const ellipsisIcon = '/icons/ellipsis.svg'

function Card({ticket, grouping, user}) {
  return (
    <div className='card'>
        <div className='card-header'>
            <div className='card-id'>{ticket.id}</div>
            {grouping === 'user' ? null : <div className='card-user'>
                <div className='card-user-icon'>{user.name.split(" ").map((n)=> n[0].toUpperCase()).join("")}</div>
                <div className={user.available ? 'active-user' : 'inactive-user'}></div>
            </div>} 
        </div>
        <div className='card-body'>
            {grouping === 'status' ? null : <img src={'/icons/status/' + ticket.status + '.svg'} />}
            <span>{ticket.title}</span>
        </div>
        <div className='card-footer'>
            {grouping === 'priority' ? null : <div className='card-footer-priority'><img src={'/icons/priority/' + ticket.priority + '.svg'} /></div>}
            <div className='card-footer-tags'>
                {ticket.tag.map(tag => {
                    return(<Tag tag={tag}/>)
                })}
            </div>
        </div>
    </div>
  )
}

export default Card