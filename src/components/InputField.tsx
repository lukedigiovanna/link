function InputField(props: {type?: string, placeholder: string, onChange: (e: string) => void}) {
    return (
        <div className="input-field">
            <input 
                placeholder={props.placeholder}
                type={props.type}
                onChange={(e) => {props.onChange(e.currentTarget.value)}}
            />
            <div>
                <div className="regular" />
                <div className="highlighted" />
            </div>
        </div>
    )
}

export { InputField };