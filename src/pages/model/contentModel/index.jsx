import {useNavigate} from 'react-router-dom'
import {Card} from 'antd'
import dataModal from './dataModel'

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
const ContentModel = () => {
  const navigate = useNavigate()
  return (
    <div className='p-2 flex gap-4 flex-wrap justify-center'>
      {dataModal.map(modal => (
        <Card
          key={modal.id}
          hoverable
          className='border border-blue-300 hover:border-blue-600 m-auto cursor-pointer w-full md:w-80'
          cover={
            <img
              alt={modal.title || 'Mô hình'}
              src={modal.image}
              className='w-full h-40 object-cover'
            />
          }
          onClick={() => navigate(`/mo-hinh/${createSlug(modal.title ?? '')}`)}
        >
          <Card.Meta title={<span className='block truncate'>{modal.title}</span>} />
        </Card>
      ))}
    </div>
  )
}

export default ContentModel
