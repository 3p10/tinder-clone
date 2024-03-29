import { useCookies } from 'react-cookie'

const ChatHeader = ({ user }) => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])

    const logout = () => {
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        window.location.reload()
    }

    return (
        <div className="chat-container-header">
            <div className="profile">
                {/* <div className="img-container">
                    <img src={user.url} alt={"photo of " + user.first_name} />
                </div> */}
                <h2>{ user.first_name }</h2>
            </div>
            <h5 className="log-out-icon" onClick={logout}>SIGN OUT</h5>
        </div>
    )
}

export default ChatHeader