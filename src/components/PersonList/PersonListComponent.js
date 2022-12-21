import PersonComponent from './PersonComponent'

function PersonLIstConponent() {
    let myarray = [{
        Name: "khaja",
        age: 23,
        skill: "React"
    },
    {
        Name: "siri",
        age: 23,
        skill: "Angular"
    },
    {
        Name: "Pasha",
        age: 23,
        skill: "GraphQL"
    }]

    // let name = myarray.map(names => names.Name)
    let name = myarray.map(names => <PersonComponent key={names.Name} list={names} />)
    return (
        <div>
            {name}
            {/* <PersonComponent list={name} /> */}
        </div>
    )

}

export default PersonLIstConponent