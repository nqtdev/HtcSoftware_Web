import CoFooter from './Components/CoFooter'
import CoNavbar from './Components/CoNavbar'
import { Outlet } from 'react-router-dom'
function App() {
    return (
        <div className="block">
            <section className="mb-20">
                <CoNavbar />
            </section>
            <section className="m-1">
                <Outlet />
            </section>
            <section>
                <CoFooter />
            </section>
        </div>
    )
}

export default App
