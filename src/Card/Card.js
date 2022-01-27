const Card = (props) => {
    const {counter, totalPrice} = props;
    return (
        <div>
            <p>Quantity: {counter}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    )
}

export default Card;