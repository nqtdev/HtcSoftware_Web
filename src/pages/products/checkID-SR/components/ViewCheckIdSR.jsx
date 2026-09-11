import Model3DViewer from 'components/Model3DViewer'

function ViewCheckidSR() {
  return (
    <div>
      <Model3DViewer
        src_product='/glb_products/sr_camera.glb'
        alt_product='Thiết bị đọc thẻ căn cước checkID sr'
      />
    </div>
  )
}

export default ViewCheckidSR
