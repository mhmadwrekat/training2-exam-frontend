import React, { Component } from 'react'
import Axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Footer from './Footer';

const BackEndUrl = process.env.REACT_APP_BACKEND_URL;
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { dataApi: [] }
    }
    componentDidMount = () => {
        Axios.get(`http://${BackEndUrl}/data`).then(res => {
            this.setState({ dataApi: res.data })
        })
    }
    handleSubmit = (strDrink, strDrinkThumb, idDrink) => {
        let config = {
            method: "POST", baseURL: `http://${BackEndUrl}`, url: "/create",
            data: {
                strDrink: strDrink,
                strDrinkThumb: strDrinkThumb,
                idDrink: idDrink
            }
        }
        Axios(config);
    }
    render() {
        return (
            <div class="row">
                {
                    this.state.dataApi.map(item => {
                        return <>
                            <Card border="warning" style={{ width: '15rem' }}>
                                <Card.Header>{item.strDrink}</Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <Card.Img variant="top" src={item.strDrinkThumb} />
                                    </Card.Title>
                                    <Card.Text>
                                        {item.idDrink}
                                    </Card.Text>
                                    <Button variant="warning" onClick={() => { this.handleSubmit(item.strDrink, item.strDrinkThumb, item.idDrink) }}>Add To Favorite</Button>{' '}
                                </Card.Body>
                            </Card>
                        </>
                    })
                }
                <Footer />
            </div>
        )
    }
}
export default Main