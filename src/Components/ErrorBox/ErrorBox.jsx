import "./ErrorBox.css"
import alertIcon from "../../../public/red-alert-icon.svg"
export default function ErrorBox({error}){
    return(
        <div className="ErrorBox">
            <img className="alert-svg" src={alertIcon} />
            <p>{error}</p>
        </div>
    )
}