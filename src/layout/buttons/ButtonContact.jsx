const ButtonContact = () => (
  <>
    <button
      onClick={() => window.open('tel:0708896666', '_self')}
      className='px-8 py-4 border-2 border-white text-white rounded-lg  hover:bg-white/10 transition-colors duration-300'
    >
      <p className='font-mulish'>Liên hệ tư vấn: 070.889.6666</p>
    </button>
  </>
)

export default ButtonContact
