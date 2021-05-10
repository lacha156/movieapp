import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { } from './movieList';
import AddReviewButton from './addReviewButton';
import ReviewList from './reviewList'



const MovieData = () => {
    
    const movies = [
        {image:"https://img.cinemablend.com/filter:scale/cb/5/6/e/4/2/a/56e42a7b3f7450ed228169fd9c27a2f9e484a3a97833a3a9d99382e6bca52738.jpg?fw=1200", Title:"Training Day",Summary:"Denzel enough said!", },
        {image:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", Title:"Avengers",Summary:"Super Hero's beat up bad guys.", },
        
        
    ]
   const renderMovie = (card,index) => {
    return(
        <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.Title}</Card.Title>
          <Card.Text>
            Summary:
            <br></br>
            {card.Summary}
           </Card.Text>
          <Card>
          </Card>
          </Card.Body>
          <Card.Footer >
            <ReviewList/>
            <br></br>
            <AddReviewButton/ >     
        </Card.Footer>  
    </Card>
      
     )
    
    }
    return (
        <div className="App">
           {movies.map(renderMovie)} 
        </div>
    )
}
 

export default MovieData