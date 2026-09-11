import 'animate.css'
import Mail from 'assets/icon_buttons/seenMail.webp'
import PropTypes from 'prop-types'
import { useState } from 'react'

const ButtonMail = ({emailAddress}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    // Kích hoạt hiệu ứng khi click
    setIsClicked(true)

    // Reset trạng thái và chuyển hướng sau khi hiệu ứng kết thúc
    setTimeout(() => {
      // Reset trạng thái trước
      setIsClicked(false)
      // Sau đó chuyển hướng
      setTimeout(() => {
        window.location.href = `mailto:${emailAddress}`
      }, 100)
    }, 800)
  }

  return (
    <div className='button_mail '>
      <a
        href={`mailto:${emailAddress}`}
        onClick={handleClick}
        className={`
          inline-block
          animate__animated
          ${isClicked ? 'animate__fadeOutTopRight' : 'animate__zoomInRight'}
        `}
      >
        <img className='w-[40%] xl:w-[50%]' src={Mail} alt='Send email' />
      </a>
    </div>
  )
}

ButtonMail.propTypes = {
  emailAddress: PropTypes.string.isRequired,
}

export default ButtonMail
