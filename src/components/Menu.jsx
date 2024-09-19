import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from './Button';

axios.defaults.withCredentials = true;

const Menu = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, [minPrice, maxPrice, category]); // Depend on filters

  const fetchData = () => {
    axios.get('http://localhost/php-rest-api/api-fetch-all.php', {
      params: {
        min_price: minPrice,
        max_price: maxPrice,
        category: category,
      },
    })
    .then((response) => {
      if (response.data.status === false) {
        setError(response.data.message);
      } else {
        setData(response.data);
        setError(null);
      }
    })
    .catch((err) => {
      setError('Error fetching data: ' + err.message);
    });
  };

  const addToCart = (food) => {
    const item = {
      id: food.id,
      name: food.title,
      price: food.price,
      quantity: 1 // Default quantity
    };

    axios.post('http://localhost/php-rest-api/cart.php?action=add', item)
      .then((response) => {
        if (response.data.status === 'success') {
          toast.success(`${food.title} added to cart successfully!`);
        } else {
          toast.error('Failed to add item to cart.');
        }
      })
      .catch((error) => {
        toast.error('Error adding to cart: ' + error.message);
        console.error('Error adding to cart:', error);
      });
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='mx-[100px] mb-[30px] bg-slate-300 p-4'>
        <div className="filters flex gap-4 align-middle">
          <label htmlFor="" className='content-center font-semibold'>Min Price</label>
          <input
            className='p-2'
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
          <label htmlFor="" className='content-center font-semibold'>Max Price</label>
          <input
            className='p-2'
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <Button text="Apply Filters" onClick={fetchData}>
            Apply filters
          </Button>
        </div>
      </div>

      <div className='grid mx-[100px] gap-4 grid-cols-5'>
        {data.length > 0 ? (
          data.map((food) => (
            <div key={food.id} className='bg-black text-white rounded-lg'>
              <img
                className='rounded-lg'
                src={`http://localhost/php-rest-api/${food.image_name}`}
                alt={food.title}
              />
              <div className='flex flex-col gap-3 font-medium p-10'>
                <Link to={`/food/${food.id}`} className="text-[36px] hover:underline">
                  {food.title}
                </Link>
                <p className='text-[18px]'>{food.description}</p>
                <div className='flex flex-row justify-between'>
                  <h2 className='text-[22px] font-semibold text-orange'>{food.price}</h2>
                  <Button text="Add to Cart" onClick={() => addToCart(food)} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No food items available.</p>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Menu;
