
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase";
import './Home.css';
import SignIn from "./SignIn";

import image1 from '../kuvat/London.JPG';
import image2 from '../kuvat/LA.JPG';
import image3 from '../kuvat/Milan.jpg';
import image4 from '../kuvat/Paris.jpg';
import image5 from '../kuvat/NL.jpg';
import image6 from '../kuvat/Kroatia3.JPG';

const imagesList = [
    {
        id: 1,
        src: image1,
        alt: "Image 1",
        subtitle: "London",
    },
    {
        id: 2,
        src: image2,
        alt: "Image 2",
        subtitle: "Los Angeles",

    },
    {
        id: 3,
        src: image3,
        alt: "Image 3",
        subtitle: "Milan",

    },
    {
        id: 4,
        src: image4,
        alt: "Image 4",
        subtitle: "Paris",

    },
    {
        id: 5,
        src: image5,
        alt: "Image 5",
        subtitle: "Keukenhof",

    },
    {
        id: 6,
        src: image6,
        alt: "Image 6",
        subtitle: "Dubrovnik",

    }
]
const PortfolioItem = ({ id, src, subtitle }) => (
    <div className="portfolio-item-wrapper">
      <div className="img-text-wrapper">
        <div className="subtitle">{subtitle}</div>
      </div>
      <img className="portfolio-img" src={src} alt={`Image ${id}`} />
    </div>
  );
  

const Home = () => {
    const [user, setUser] = useState(null);
    const [signInSuccess, ] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("User State:", user);
            setUser(user);
        });
        return () => unsubscribe();
    }, []);
   


    return (

        <div className="container">
            {!user && <SignIn />}
            {user && (
                <div>
                    <div className="nav-wrapper"></div>
                    <div className="content-wrapper">
                        <div className="portfolio-items-wrapper">
                            {imagesList.map((image) => (
                                <PortfolioItem key={image.id} {...image} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {!user && signInSuccess && <SignIn />}
        </div>
    );
};

export default Home;
