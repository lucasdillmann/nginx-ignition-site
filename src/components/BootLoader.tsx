import logo from "../assets/logo.svg"

export default function BootLoader() {
    return (
        <div className="boot">
            <img src={logo} width={64} height={64} alt="" />
            <span>nginx ignition</span>
        </div>
    )
}
