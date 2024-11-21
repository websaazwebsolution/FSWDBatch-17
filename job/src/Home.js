import React, { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import Counter from './Counter';
import Data from './Data';
import Button from './Button';
import axios from 'axios';
import Card from './Card';


function Home(){
        const [products,setProducts] = useState([]);
        useEffect(() => {
            axios.get('https://fakestoreapi.com/products')
            .then(response => 
                {setProducts(response.data)
                    console.log(response.data);
                }
            )

            .catch(err => console.log(err))

        },[])


return <div>
            <h1>Products</h1>

            <Card  products={products}/>

        {/* <Data /> */}
        {/* <Counter/>
        <h1> This is Home in home about file</h1>
            <About />
            <Contact /> */}
            <Button title="Click me"  color="white" bg="brown"/>
            <Button title="apply now"  color="red" bg="yellow"/>
            <Button title="Hire me"  color="blue" bg="black"/>
            <Button title="Delete"  color="yellow" bg="red"/>
            <Button title="Add me"  color="white" bg="purple"/>
    </div>
}

export default Home