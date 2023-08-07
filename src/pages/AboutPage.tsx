import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Page of info</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente alias asperiores quam consequatur sit quaerat velit quibusdam nam sint, maiores voluptatem ipsum praesentium eaque, perspiciatis veritatis, voluptates sequi? Nesciunt, laudantium.</p>
            <button className='button' onClick={() => navigate('/')}>Return to TodoList</button>
        </>
    );
};