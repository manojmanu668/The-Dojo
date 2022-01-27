import './avatar.css'

export default function avatar({src}) {
    return (
        <div className='avatar'>
            <img src={src} alt="user avatar" />
        </div>
    )
}
