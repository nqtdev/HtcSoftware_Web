import hanel from 'assets/image_products/softwareInterface/hanel.png'
const HanelView = () => {
  return (
    <div className='w-full'>
      <div>
        <h2 className='base_title'>Giao diện phần mềm</h2>
        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full'></div>
      </div>
      <img className='w-4/5 xl:w-3/4 m-auto' src={hanel} alt='giao diện sử dụng phần mềm' />
    </div>
  )
}

export default HanelView
