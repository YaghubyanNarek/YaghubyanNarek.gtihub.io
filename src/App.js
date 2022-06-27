import React, { useState } from 'react';
import Categories from './components/Categories';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from './components/Items';


function App() {
  const [state,setState] = useState([
    {
      id:1,
      title:'Стул серый',
      img:'chair-gray.jpg',
      desc:'Lorem ipsum dolar amet, consecterur adipisicing.',
      category:'chairs',
      price:'49.99'
    },
    {
      id:2,
      title:'Стол',
      img:'table.jpg',
      desc:'Lorem ipsum dolar amet, consecterur adipisicing.',
      category:'tables',
      price:'149.99'
    },
    {
      id:3,
      title:'Диван',
      img:'sofa.jpg',
      desc:'Lorem ipsum dolar amet, consecterur adipisicing.',
      category:'sofa',
      price:'549.99'
    },
    {
      id:4,
      title:'Лампа',
      img:'light.jpeg',
      desc:'Lorem ipsum dolar amet, consecterur adipisicing.',
      category:'light',
      price:'24.99'
    },
    {
      id:5,
      title:'Стул белый',
      img:'chair-white.jpg',
      desc:'Lorem ipsum dolar amet, consecterur adipisicing.',
      category:'chairs',
      price:'49.99'
    },
    {
      id:6,
      title:'Кровать',
      img:'bed.jpg',
      desc:'Lorem ipsum dolar amet, consecterur adipisicing.',
      category:'beds',
      price:'599.99'
    }
  ])
  const [orders,setOrders] = useState([])
  const [currentItems,setCurrentItems] = useState(state)
  const [showFullItem,setShowFullItem] = useState(false)
  return (
      <div className="wrapper">
        <Header orders={orders} onDelete={deleteOrder} />
        <Categories chooseCategory={chooseCategory} />
        <Items items={currentItems} onAdd={AddToOrder} />
        <Footer />
      </div>
  );
  

  function chooseCategory(category){
    if(category !== 'all'){
      setCurrentItems(state.filter(el => el.category === category))
    }
    else{
      setCurrentItems(state)
    }
  }

  function deleteOrder(id){
    setOrders(orders.filter(el => el.id !== id))
  }

  function AddToOrder(item) {
    let isInArray = false
    orders.forEach(el =>{
      if(el.id === item.id){
        isInArray = true
      }
    })
    if(!isInArray){
      setOrders([...orders ,item])
    }
  }
}

export default App;
