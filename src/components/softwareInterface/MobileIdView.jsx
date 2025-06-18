import checkid from 'assets/image_products/softwareInterface/checkid.png'
const MobileIDView = () => {
  return (
    <>
      <div>
        <div>
          <h2 className='base_title'>Giao diện sử dụng phần mềm</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full'></div>
        </div>
        <img className='w-4/5 xl:w-3/4 m-auto' src={checkid} alt='giao diện sử dụng phần mềm' />
      </div>
    </>
  )
}
export default MobileIDView
