import Card from '../styles/Styles'
import './PropsComponentStyle.css'

const PropsComponent = (props) => {

    return (
        <Card className='Propss'>
            <div className='items'>
                <h2> {props.Obj[0].Name}</h2>
                <button >Click</button>
            </div>
            <div className='items'>
                <h2> {props.Obj[1].Name}</h2>
                <button onClick={() => {
                    props.handleData("khaja Pasha")
                }}>Click</button>
            </div>
        </Card>
    )

}

export default PropsComponent