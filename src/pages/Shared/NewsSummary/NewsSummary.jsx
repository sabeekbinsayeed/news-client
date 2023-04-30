import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaRegBookmark, FaStar, FaStarHalfAlt } from 'react-icons/fa';
const NewsSummary = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;
    console.log(_id)
    return (
        <Card className="">
            <Card.Header className='d-flex justify-content-between align-center'>
                <div className='d-flex'>
                    <Image className='me-2' src={author.img} roundedCircle style={{ height: '60px' }}>
                    </Image>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>

                <div>
                    <FaRegBookmark className='me-3'></FaRegBookmark>
                    <FaBookmark></FaBookmark>
                </div>
            </Card.Header>



            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 250 ?
                        <p>{details.slice(0, 250)} + ... <Link to={`/news/${_id}`}>see more</Link></p> : <p>{details}</p>
                    }

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    {rating?.number}

                </div>

                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>

                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsSummary;