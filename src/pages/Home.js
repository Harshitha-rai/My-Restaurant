import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'react-router-dom';
import BannerImg from '../images/banner.jpeg';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${BannerImg})`}}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Mangalorean Food</p>

            <Link to='./menu'>
              <button>
                ORDER NOW
              </button>
            </Link>
          </div>
        </div>

    </Layout>
  )
}

export default Home