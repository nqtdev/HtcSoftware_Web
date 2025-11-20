import {useNavigate} from 'react-router-dom'
import {Card} from 'antd'
import dataNews from './dataNews'

// Hàm tạo slug từ tiêu đề
const createSlug = title => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}
const ContentNews = () => {
  const navigate = useNavigate()
  return (
    <div className='p-2 flex gap-4 flex-wrap justify-center'>
      {dataNews.map(modal => (
        <Card
          key={modal.id}
          hoverable
          className='border border-blue-300 hover:border-blue-600 m-auto cursor-pointer w-full md:w-80'
          cover={
            <img
              alt={modal.title || 'Tin tức'}
              src={modal.image}
              className='w-full h-40 object-cover'
            />
          }
          onClick={() => navigate(`/newDocuments/tin-tuc/${createSlug(modal.title ?? '')}`)}
        >
          <Card.Meta title={<span className='block truncate'>{modal.title}</span>} />
        </Card>
      ))}
    </div>
  )
}

export default ContentNews
