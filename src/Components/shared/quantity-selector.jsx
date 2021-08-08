import { useState } from "react";

export default function QuantitySelector(props) {
    const min = props?.min ?? 0;
    const max = props?.max ?? Number.MAX_VALUE;

    const [quantity, setQuantity] = useState(props.quantity);

    const decrement = () => {
        if (quantity > min) {
            setQuantityInternal(quantity - 1)
        }
    }

    const increment = () => {
        if (quantity < max) {
            setQuantityInternal(quantity + 1)
        }
    }


    const setQuantityInternal = (value) => {
        props.onChange(value);
        setQuantity(value);
    }

    return (
        <div className="quantity-input">
            <button className="quantity-input__modifier quantity-input__modifier--left"
                    onClick={decrement}>
                &mdash;
            </button>
            <input className="quantity-input__screen" type="text" value={quantity} readOnly/>
            <button className="quantity-input__modifier quantity-input__modifier--right"
                    onClick={increment}>
                &#xff0b;
            </button>
        </div>
    );
}
