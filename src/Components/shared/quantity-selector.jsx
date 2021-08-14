import { useCounter } from "react-use";
import { useEffect } from "react";

export default function QuantitySelector(props) {
    const min = props?.min ?? 0;
    const max = props?.max ?? Number.MAX_VALUE;
    const [current, {inc, dec}] = useCounter(props.value, max, min);

    useEffect(() => {
        props.onChange(current)
    }, [current]);
    
    return (
        <div className="quantity-input">
            <button className="quantity-input__modifier quantity-input__modifier--left"
                    type='button'
                    onClick={() => dec(1)}>
                &mdash;
            </button>
            <input className="quantity-input__screen" type="text" value={current} readOnly/>
            <button className="quantity-input__modifier quantity-input__modifier--right"
                    type='button'
                    onClick={() => inc(1)}>
                &#xff0b;
            </button>
        </div>
    );
}
