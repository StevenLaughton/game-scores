import { useState } from "react";

export default function QuantitySelector(props) {
    const min = props?.min ?? 0;
    const max = props?.max ?? Number.MAX_VALUE;

    const [value, setValue] = useState(props.value);

    const decrement = () => {
        if (value > min) {
            setQuantityInternal(value - 1)
        }
    }

    const increment = () => {
        if (value < max) {
            setQuantityInternal(value + 1)
        }
    }


    const setQuantityInternal = (value) => {
        props.onChange(value);
        setValue(value);
    }

    return (
        <div className="quantity-input">
            <button className="quantity-input__modifier quantity-input__modifier--left"
                    type='button'
                    onClick={decrement}>
                &mdash;
            </button>
            <input className="quantity-input__screen" type="text" value={value} readOnly/>
            <button className="quantity-input__modifier quantity-input__modifier--right"
                    type='button'
                    onClick={increment}>
                &#xff0b;
            </button>
        </div>
    );
}
