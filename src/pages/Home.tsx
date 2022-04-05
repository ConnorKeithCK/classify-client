import { AddCircle } from '@mui/icons-material';
import { Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import DocumentsTable from '../common/Documents';
import { UploadDocumentModal } from '../common/UploadDocumentModal';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [uploadDocumentModal, setUploadDocumentModal] = useState(false)

  return (
    <Container sx={{width: '90%', height: '100%', display: 'block'}}>
      <Typography sx={{textAlign: 'left', marginTop: 5}} variant={'h5'}>Document List</Typography>
        <Typography variant={'body1'} sx={{textAlign: 'left', marginBottom: 5}}>
          Below is a list of documents that you have access to with your current active security clearance.
          <span style={{fontWeight: 'bolder'}}> ALL</span> activity will be logged.
          <br></br><br></br>
          For demonstration purposes, use the dropdowns below to select different agencies and clearance level(s). In a production version of this application,
          this feature would not be available to users and instead their home agency and clearance would be used, ideally synced with an Active Directory, LDAP, or similar
          service.
        </Typography>
        <div style={{  width: '100%', display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: 15, marginBottom: 15 }}>
            <FormControl>
              <InputLabel>Agency</InputLabel>
              <Select sx={{ width: 100 }} label="Agency">
                <MenuItem value="FBI">FBI</MenuItem>
                <MenuItem value="CIA">CIA</MenuItem>
                <MenuItem value="NSA">NSA</MenuItem>
                <MenuItem value="DOD">DOD</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel>Clearance Level</InputLabel>
              <Select sx={{ width: 300 }} label="Clearance Level">
                <MenuItem value="CONFIDENTIAL">CONFIDENTIAL</MenuItem>
                <MenuItem value="SECRET">SECRET</MenuItem>
                <MenuItem value="TOP SECRET">TOP SECRET</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ width: '100%', display: 'block' }}>
          <DocumentsTable />
        </div>
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
