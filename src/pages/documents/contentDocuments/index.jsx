import dataDocuments from './dataDocuments'
import {useNavigate} from 'react-router-dom'

const createSlug = title => {
  return String(title || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
const ContentDocuments = () => {
  const navigate = useNavigate()
  return (
    <>
      <ul className='w-full divide-y divide-gray-200'>
        {dataDocuments.map((item, index) => (
          <li
            key={item.id}
            onClick={() => navigate(`/newDocuments/tai-lieu/${createSlug(item.title)}`)}
            className='px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors '
          >
            <div className='flex items-start gap-3'>
              <span className='text-base text-red-600 min-w-[2rem] text-right'>{index + 1}.</span>
              <h2 className='text-base md:text-lg text-blue-800 leading-snug font-lora'>
                {item.title}
              </h2>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ContentDocuments
