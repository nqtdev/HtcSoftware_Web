import PropTypes from 'prop-types'
import Mail from '../../Img/seenMail.svg'
const ButtonMail = ({ emailAddress }) => {
    return (
        <div className="button_mail animate-bounce">
            <a href={`mailto:${emailAddress}`}>
                <img className="w-[80%] lg:w-full" src={Mail} alt="" />
            </a>
        </div>
    )
}

ButtonMail.propTypes = {
    emailAddress: PropTypes.string.isRequired,
}

export default ButtonMail
