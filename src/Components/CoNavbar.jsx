import { Dropdown, Navbar, Button } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import logo from '../../Img/logo_sw.png'
import Apphtc from '../../FileDownload/checkid_client_installer.zip'
const CoNavbar = () => {
    return (
        <div className="fixed left-0 top-0 !z-10 w-full !bg-white">
            <Navbar fluid className="m-auto !p-1 xl:w-3/4">
                {/* Logo htc software  */}
                <Navbar.Brand to="/" as={NavLink}>
                    <img src={logo} className="w-1/2" alt="htc software logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Button
                        gradientDuoTone="purpleToBlue"
                        className="mb-1 md:mb-0"
                        active
                        to="/"
                        as={NavLink}
                    >
                        Trang Chủ
                    </Button>
                    <Button
                        gradientDuoTone="purpleToBlue"
                        className="mb-1 md:mb-0"
                    >
                        <Dropdown
                            arrowIcon={true}
                            label="Giải Pháp"
                            inline
                            placement="bottom"
                        >
                            {/* RAR eKYC Platform */}
                            <Dropdown.Item as={NavLink} to="/rar-ekyc">
                                <Button
                                    gradientDuoTone="purpleToBlue"
                                    className="w-[12rem]"
                                >
                                    RAR eKYC Platform
                                </Button>
                            </Dropdown.Item>
                            {/* HTC eKYC Platform */}
                            <Dropdown.Item as={NavLink} to="/ekyc-platform">
                                <Button
                                    gradientDuoTone="purpleToBlue"
                                    className="w-[12rem]"
                                >
                                    HTC eKYC Platform
                                </Button>
                            </Dropdown.Item>
                            {/* RAR Chip Toolkit */}
                            <Dropdown.Item as={NavLink} to="/chip-toolkit">
                                <Button
                                    gradientDuoTone="purpleToBlue"
                                    className="w-[12rem]"
                                >
                                    RAR Chip Toolkit
                                </Button>
                            </Dropdown.Item>
                        </Dropdown>
                    </Button>
                    {/* Thiết bị  */}
                    <Button
                        gradientDuoTone="purpleToBlue"
                        className="mb-1 md:mb-0"
                    >
                        <Dropdown
                            arrowIcon={true}
                            label="Thiết Bị"
                            inline
                            placement="bottom"
                        >
                            {/* CheckID-SR */}
                            <Dropdown.Item as={NavLink} to="/checkid-sr">
                                <Button
                                    gradientDuoTone="purpleToBlue"
                                    className="w-[12rem]"
                                >
                                    CheckID-SR
                                </Button>
                            </Dropdown.Item>
                            {/* CheckID-ET100 */}
                            <Dropdown.Item as={NavLink} to="/checkid-et100">
                                <Button
                                    gradientDuoTone="purpleToBlue"
                                    className="w-[12rem]"
                                >
                                    CheckID-ET100
                                </Button>
                            </Dropdown.Item>
                            {/* Meta eYe  */}
                            <Dropdown.Item as={NavLink} to="/meta-eye">
                                <Button
                                    gradientDuoTone="purpleToBlue"
                                    className="w-[12rem]"
                                >
                                    Meta eYe
                                </Button>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href={Apphtc}>
                                    <Button
                                        gradientDuoTone="purpleToBlue"
                                        className="flex w-[12rem]"
                                    >
                                        <div className="flex items-center">
                                            Download{' '}
                                            <svg
                                                className="ml-2 h-6 w-6 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"
                                                />
                                            </svg>
                                        </div>
                                    </Button>
                                </a>
                            </Dropdown.Item>
                        </Dropdown>
                    </Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default CoNavbar
