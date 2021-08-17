export default function QuantitySelector(props) {
    const min = 0;
    const max = Number.MAX_VALUE;


    const increase = () => {
        if (props.value < max) {
            props.onChange(props.value + 1);
        }
    }

    const decrease = () => {
        if (props.value > min) {
            props.onChange(props.value - 1);
        }
    }

    return (
        <div className="quantity-input">
            <button className="quantity-input__modifier quantity-input__modifier--left"
                    type='button'
                    onClick={decrease}>
                &mdash;
            </button>
            <input className="quantity-input__screen" type="text" value={props.value} readOnly/>
            <button className="quantity-input__modifier quantity-input__modifier--right"
                    type='button'
                    onClick={increase}>
                &#xff0b;
            </button>
        </div>
    );
}
