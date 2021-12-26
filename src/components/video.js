import {Card,Button,Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import styled from 'styled-components';

const Movie = styled.a`
    color: black;
    text-decoration:none;
    
`

export function Videos (title){
    return(
        <Stack direction='horizontal' gap={5} className='justify-content-md-center' >
        <Movie href='http://naver.com'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/thumb.svg" />
            <Card.Body>
                <Card.Title>영상1</Card.Title>
                <Card.Text>
                영상1 설명
                </Card.Text>
            </Card.Body>
        </Card>
        </Movie>
        <Movie href='/video'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/thumb.svg" />
            <Card.Body>
                <Card.Title>영상2</Card.Title>
                <Card.Text>
                영상2 설명
                </Card.Text>
            </Card.Body>
        </Card>
        </Movie>
        <Movie href='http://naver.com'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/thumb.svg" />
            <Card.Body>
                <Card.Title>영상3</Card.Title>
                <Card.Text>
                영상3 설명
                </Card.Text>
            </Card.Body>
        </Card>
        </Movie>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/thumb.svg" />
            <Card.Body href='http://naver.com'>
                <Card.Title>영상4</Card.Title>
                <Card.Text>
                영상4 설명
                </Card.Text>
            </Card.Body>
        </Card>
        </Stack>
    )
}