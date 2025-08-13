import { useFormInput } from "../../hooks/useFormInput"

export default function Form() {

    const firstNameProps = useFormInput("Cristian")
     const LastNameProps = useFormInput("Souza")

    return(
        <>
            <label>
                First name:
                <input {...firstNameProps}/>
            </label>

             <label>
                Last name:
                <input {...LastNameProps}/>
            </label>

            <p>
                <b>
                    Bom dia {firstNameProps.value} {LastNameProps.value}.
                </b>
            </p>
        </>
    )
}