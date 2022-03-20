import { Container, Typography } from '@mui/material';
import React from 'react';
import DocumentsTable from '../common/Documents';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Container sx={{width: '90%', height: '100%'}}>
      <Typography sx={{textAlign: 'left', marginTop: 5}} variant={'h5'}>Document List</Typography>
        <Typography variant={'body1'} sx={{textAlign: 'left', marginBottom: 5}}>
          Below is a list of documents that you have access to with your current active security clearance.
          <span style={{fontWeight: 'bolder'}}> ALL</span> activity will be logged.
        </Typography>
      <DocumentsTable />
    </Container>
    )
};

export default HomePage;
