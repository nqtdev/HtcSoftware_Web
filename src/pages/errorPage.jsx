import {Button} from 'antd'
import {NavLink} from 'react-router-dom'
import {HomeOutlined, MoonOutlined, SunOutlined} from '@ant-design/icons'
import {useState} from 'react'

const ErrorPage = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-indigo-100 to-purple-100 text-gray-800'
      } flex items-center justify-center p-6`}
    >
      <div className='text-center max-w-md'>
        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`absolute top-6 right-6 p-2 rounded-lg transition-colors ${
            isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'
          }`}
        >
          {isDark ? <SunOutlined /> : <MoonOutlined />}
        </button>

        {/* GIF Vui nhộn */}
        <div className='mb-6 flex justify-center'>
          <img
            src='https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif'
            alt='Confused John Travolta'
            className='w-48 h-48 rounded-lg object-cover'
          />
        </div>

        {/* Content */}
        <h1 className={`text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          404
        </h1>
        <p className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Trang không tìm thấy
        </p>
        <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Có vẻ như bạn đã đi lạc. Hãy để chúng tôi đưa bạn về nhà.
        </p>

        {/* Buttons */}
        <div className='flex gap-3 justify-center'>
          <NavLink to='/'>
            <Button
              type='primary'
              size='large'
              icon={<HomeOutlined />}
              className={
                isDark
                  ? 'bg-blue-600 hover:bg-blue-700 border-blue-600'
                  : 'bg-blue-600 hover:bg-blue-700 border-blue-600'
              }
            >
              Về trang chủ
            </Button>
          </NavLink>
          <Button
            size='large'
            className={
              isDark
                ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-white'
                : 'bg-white border-gray-300 hover:border-blue-500'
            }
            onClick={() => window.history.back()}
          >
            Quay lại
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
