function PersonComponent(props) {

    const lists = () => {
        console.log(props.list.age)
    }

    return (
        <div>
            <div>
                <h2>{props.list.Name}</h2>
                {/* <h2>{props.list[1]}</h2> */}
                {/* <h2>{props.list[2]}</h2> */}
            </div>
            <div>
                <button onClick={() => { lists() }}>click</button>
            </div>
        </div>
    )
}
export default PersonComponent