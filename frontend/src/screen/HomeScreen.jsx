import {useState, useEffect} from 'react'
import axios from 'axios'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProduct = async()=>{
      const {data} = await axios.get('/api/products')
      setProducts(data);
    }
    fetchProduct()
  },[])
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {
            products && products.map((item,i)=>{
                return(
                  <Col sm={12} md={6} lg={3} xl={3}>
                    <Product product = {item} />
                  </Col>
                )
            })
        }
      </Row>
    </>
  )
}

export default HomeScreen
