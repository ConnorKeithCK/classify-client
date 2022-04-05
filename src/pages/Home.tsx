import { AddCircle } from '@mui/icons-material';
import { Button, Container, IconButton, Select, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import DocumentsTable from '../common/Documents';
import { UploadDocumentModal } from '../common/UploadDocumentModal';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [uploadDocumentModal, setUploadDocumentModal] = useState(false)

  return (
    <Container sx={{width: '90%', height: '100%'}}>
      <Typography sx={{textAlign: 'left', marginTop: 5}} variant={'h5'}>Document List</Typography>
        <Typography variant={'body1'} sx={{textAlign: 'left', marginBottom: 5}}>
          Below is a list of documents that you have access to with your current active security clearance.
          <span style={{fontWeight: 'bolder'}}> ALL</span> activity will be logged.
        </Typography>
      <DocumentsTable />
      <Container sx={{position: 'fixed', left: 600, bottom: 30}}>
        <Tooltip title={<h1 style={{ fontSize: 14}}>Upload a new document</h1>} placement='top' arrow>
          <div>
            <IconButton onClick={() => setUploadDocumentModal(true)}>
              <AddCircle color="primary" sx={{ fontSize: 65, alignSelf: 'center' }}/>
            </IconButton>
          </div>
        </Tooltip>
      </Container>

      {uploadDocumentModal && (<UploadDocumentModal handleClose={() => setUploadDocumentModal(false)}></UploadDocumentModal>)}


    </Container>
    )
};

export default HomePage;
