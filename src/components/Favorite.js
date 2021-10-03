import React, { Component } from 'react'
import Axios from 'axios';
import Footer from './Footer';

import { Card, Button,Form } from 'react-bootstrap';
const BackEndUrl = process.env.REACT_APP_BACKEND_URL;

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = { dataDB: [],showUpdate:false,ids:'', strDrink:'',strDrinkThumb:'',idDrink:'' }
    }
    componentDidMount = () => {
        Axios.get(`http://${BackEndUrl}/DBdata`).then(res => {
            this.setState({ dataDB: res.data })
        })
    }
    hanldeDelete = (id) => {
        let ID = id;
        let config = {
            method: "DELETE", baseURL: `http://${BackEndUrl}`, url: `/delete/${ID}`,
        } 
        Axios(config).then(response => {
            this.setState({
                dataDB:response.data
            })
        })   }
handlestrDrink = (event) => {this.setState({strDrink:event.target.value});}
handlestrDrinkThumb = (event) => {this.setState({strDrinkThumb:event.target.value});}
hanldeidDrink = (event) => {this.setState({idDrink:event.target.value});}
hanldeUpdate = (id , strDrink , strDrinkThumb , idDrink) => {
    this.setState({
        ids:id,
        strDrink:strDrink,
        strDrinkThumb:strDrinkThumb,
        idDrink:idDrink,
        showUpdate:true
    })
}
hanldeUpdateForm = (id) => {
    let ID = id ;
    let config = {
        method: "PUT", baseURL: `http://${BackEndUrl}`, url: `/update/${ID}`,
        data:{
            strDrink:this.state.strDrink,
            strDrinkThumb:this.state.strDrinkThumb,
            idDrink:this.state.idDrink
        }
    } 
    Axios(config).then(response => {
        this.setState({
            dataDB:response.data
        })
    });
}
        render() {
        return (
            <div class="row">
 {!this.state.showUpdate ? <br></br>:
 <Form onSubmit={() => {this.hanldeUpdateForm(this.state.ids)}}>
 <Form.Group className="mb-3">
   <Form.Label>Type</Form.Label>
   <Form.Control type="text" placeholder={this.state.strDrink} onChange={this.handlestrDrink} />
 </Form.Group>

 <Form.Group className="mb-3">
   <Form.Label>Image URL</Form.Label>
   <Form.Control type="text" placeholder={this.state.strDrinkThumb} onChange={this.handlestrDrinkThumb} />
 </Form.Group>

 <Form.Group className="mb-3">
   <Form.Label>ID </Form.Label>
   <Form.Control type='text' placeholder={this.state.idDrink} onChange={this.hanldeidDrink} />
 </Form.Group>

 <Button variant="success" type="submit">
   UPDATE
 </Button>
</Form>
 }               
                {
                    this.state.dataDB.map(item => {
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
                                    <Button variant="danger" onClick={()=>{this.hanldeDelete(item._id)}}>Remove</Button>{' '}
                                    <Button variant="success" onClick={()=>{this.hanldeUpdate(item._id, item.strDrink ,item.strDrinkThumb ,item.idDrink )}}>Edit</Button>{' '}
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
export default Favorite