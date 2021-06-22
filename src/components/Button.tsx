import { useState } from "react"

type ButtonProps = {
    value?: number
}

export function Button(props: ButtonProps) {

    const [value, setValue] = useState(0);

    const eventHandle = () => {
        setValue(value + 1);
    }

    return (
        <button onClick={() => eventHandle()}> {value}</button >
    )
}