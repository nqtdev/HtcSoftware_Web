import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const Model3DViewer = ({src_product, alt_product}) => {
  useEffect(() => {
    window.ModelViewerElement = window.ModelViewerElement || {}
    window.ModelViewerElement.meshoptDecoderLocation =
      'https://cdn.jsdelivr.net/npm/meshoptimizer/meshopt_decoder.js'
    import('@google/model-viewer').catch(err =>
      console.error('Không thể tải thư viện model-viewer:', err),
    )
  }, [])

  if (!src_product) {
    return (
      <div className='flex items-center justify-center bg-red-50 text-red-600 rounded-lg p-4'>
        ⚠️ Lỗi: Thiếu đường dẫn file .glb (src)
      </div>
    )
  }

  return (
    <>
      {/* Button trigger modal - Chỉ tự quay, không có camera-controls */}
      <div className='cursor-pointer w-[450px] h-[450px] overflow-hidden relative rounded-full'>
        <model-viewer
          src={src_product}
          alt={alt_product}
          auto-rotate
          className='w-full h-full m-auto'
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
          shadow-intensity='1'
          shadow-softness='0.5'
          exposure='1'
          camera-orbit='45deg 65deg auto'
          rotation-per-second='15deg'
          interpolation-decay='600'
          camera-controls
        ></model-viewer>
      </div>
    </>
  )
}

export default Model3DViewer
