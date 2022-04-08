import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import { urlFor } from '../utils/image';

export default function ProductItem({ course_product }) {
  // console.log(course_product);
  return (
    <Card>
      <NextLink
        href={`/course_product/${course_product.slug.current}`}
        passHref
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlFor(course_product.image)}
            title={course_product.course_name}
          ></CardMedia>
          <CardContent>
            <Typography>{course_product.course_name}</Typography>
            <Typography>
              Duration: {course_product.course_duration} Months
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>${course_product.course_price}</Typography>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
