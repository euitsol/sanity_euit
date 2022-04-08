import Head from 'next/head';
import { Alert, CircularProgress, Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import client from '../utils/client';
import ProductItem from '../components/ProductItem';

export default function Home() {
  const [state, setState] = useState({
    course_prod: [],
    error: '',
    loading: true,
  });
  const { loading, error, course_prod } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const course_prod = await client.fetch(`*[_type == "course_product"]`);
        setState({ course_prod, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Grid container spacing={3}>
          {course_prod.map((course_product) => (
            <Grid item md={4} key={course_product.slug}>
              <ProductItem course_product={course_product}></ProductItem>
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  );
}
