import {Pagination,Stack,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import styled from 'styled-components';



export function UnderBar (){
    return(
        
        <Stack  gap={2} className='col-md-2 mx-auto'  >
        <Pagination >
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            

            <Pagination.Item disabled>{2}</Pagination.Item>
            <Pagination.Item disabled>{3}</Pagination.Item>
            <Pagination.Item disabled>{4}</Pagination.Item>
            <Pagination.Item disabled>{5}</Pagination.Item>
            <Pagination.Item disabled>{6}</Pagination.Item>

            <Pagination.Item disabled>{7}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
        </Stack>
    )
}