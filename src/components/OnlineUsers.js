import './OnlineUsers.css'
import { useCollection } from '../hooks/useCollection'
import Avatar from './Avatar'
import { useAuthContext } from '../hooks/useAuthContext'

export default function OnlineUsers() {
    const { user } = useAuthContext()
    const { error, documents } = useCollection('users')

    return (
        <div className='user-list'>
            <h2>All Users</h2>
            {error && <div className="error">{error}</div> }
            {documents && documents.map(auser => (
                  user.uid !== auser.id ? ( 
                <div key={auser.id} className='user-list-item'>
                    {auser.online && <span className='online-user'></span> }
                    <span>{auser.displayName}</span>
                    <Avatar src={auser.photoURL}/>
                </div> ) : ''
            ))}
        </div>
    )
}
