// import logo from '../images/OIP.jpg'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false
    return (
        <nav className="nav-bar">
            {/* <div className="logo-container">
                <img className="logo" src={logo}/>
            </div> */}

            {!authToken && !minimal && <button className='primary-button'
                onClick={handleClick}
                disabled={showModal}>
                SIGN IN
            </button>}
        </nav>

    )
}

export default Nav