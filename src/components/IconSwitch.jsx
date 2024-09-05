import '../styles/IconSwitch.css'

function IconSwitch({icon, onClick}) {
  return (
    <div className="icon-container">
      <span className="material-icons icon-switch" onClick={onClick}>
        {icon}
      </span>
    </div>
  )
}

export default IconSwitch;
