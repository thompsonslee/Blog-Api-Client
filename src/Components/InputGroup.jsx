export default function InputGroup({type,name,label,value,setValue}){

    return(
        <div className="InputGroup">
            <label htmlFor={name}>{label}</label>
            <input 
                required
                type={type}
                name={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></input>
        </div>
    )
}