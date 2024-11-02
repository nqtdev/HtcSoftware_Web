import { Tabs, ConfigProvider } from 'antd'
import SlideShowSwiper from 'components/SlideShowSwiper'
import {
  SlideProductCam,
  SlideProductNoCam,
  SlideProduct
} from './data/SlideProduct'
const onChange = (key) => {
  console.log(key)
}
const items = [
  {
    key: '1',
    label: 'Thiết bị đầu đọc thẻ có Camera',
    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProductCam} />
      </>
    )
  },
  {
    key: '2',
    label: 'Thiết bị đầu đọc thẻ không Camera',
    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProductNoCam} />
      </>
    )
  },
  {
    key: '3',
    label: 'So sánh',
    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProduct} />
      </>
    )
  }
]
const TabShowDevice = () => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: 'Arial'
      },
      components: {
        Tabs: {
          // titleFontSizeLG: 17,
          titleFontSize: 17
        }
      }
    }}
  >
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </ConfigProvider>
)
export default TabShowDevice
