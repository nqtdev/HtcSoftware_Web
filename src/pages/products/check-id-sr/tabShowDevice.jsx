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
    label: 'Có Camera',
    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProductCam} />
      </>
    )
  },
  {
    key: '2',
    label: 'Không Camera',
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
          titleFontSize: 16
        }
      }
    }}
  >
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </ConfigProvider>
)
export default TabShowDevice
