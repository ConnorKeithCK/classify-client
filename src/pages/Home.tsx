import { AddCircle } from '@mui/icons-material';
import { Button, Container, Dialog, DialogContent, DialogTitle, Divider, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../App.css';
import DocumentsTable from '../common/Documents';
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import { UploadDocumentModal } from '../common/UploadDocumentModal';
import ReactJson from 'react-json-view';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [uploadDocumentModal, setUploadDocumentModal] = useState(false)
  const [previewUrl, setPreviewUrl] = useState("")
  const [numPages, setNumPages] = useState(null);
  const [filePreviewModal, setFilePreviewModal] = useState(false)
  const [transactionData, setTransactionData] = useState()
  const [transactionDataModal, setTransactionDataModal] = useState(false)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const handleDocumentClick = (e: any) => {
    getPreviewUrl(e.row.cloudPath)
    getTransaction(e.row.btcHash)
  }

  const refreshPage = () => {
    setUploadDocumentModal(false)
  }

  const getPreviewUrl = async (filePath) => {
    fetch(`http://localhost:8080/documents/view?file=${encodeURIComponent(filePath)}`)
    .then(res => res.text())
    .then((result) => {
      setPreviewUrl(result)
      setFilePreviewModal(true)
    },
    (error) => {
      console.log(error)
    })
}

  const getTransaction = async (hash) => {
    fetch(`http://localhost:8080/documents/transaction?transaction=${encodeURIComponent(hash)}`)
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      setTransactionData(result.transaction)
    },
    (error) => {
      console.log(error)
    })
  }

  return (
    <Container sx={{width: '90%', height: '100%', display: 'block'}}>
      <Typography sx={{textAlign: 'left', marginTop: 5}} variant={'h5'}>Document List</Typography>
        <Typography variant={'body1'} sx={{textAlign: 'left', marginBottom: 5}}>
          Below is a list of documents that you have access to with your current active security clearance.
          <br></br><br></br>
          For demonstration purposes, use the dropdowns below to select different agencies and clearance level(s). In a production version of this application,
          this feature would not be available to users and instead their home agency and clearance would be used, ideally synced with an Active Directory, LDAP, or similar
          service.
        </Typography>
        <div style={{ width: '100%', display: 'block' }}>
          <div>
          <DocumentsTable handleFilePreview={(e: any) => handleDocumentClick(e)} />
          </div>
            {previewUrl != "" && (
            <Dialog maxWidth={false} open={filePreviewModal} sx={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', '& .MuiPaper-root': {
              width: '80%'
            }}} >
              <DialogTitle>File Preview 
                <Button sx={{ float: 'right'}} onClick={() => setFilePreviewModal(false)}>Close</Button>
                <Button sx={{ float: 'right'}} onClick={() => setTransactionDataModal(true)}>View transaction data</Button>
              </DialogTitle>
              <Divider />
              <DialogContent
              sx={{ display: 'flex', flexDirection: 'row !important', width: '100%', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center'}}>
                <Document file={previewUrl} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                          pageNumber={index + 1}
                          key={`page_${index + 1}`}>
                        </Page>
                    ))}
                  </Document>
              </DialogContent>
            </Dialog>)}
            {transactionDataModal && (
              <Dialog open={transactionDataModal} maxWidth={false}>
                <DialogTitle>Transaction Data
                   <Button sx={{ float: 'right'}} onClick={() => setTransactionDataModal(false)}>Close</Button>
                </DialogTitle>
                <DialogContent>
                  <ReactJson style={{ width: '40%', height: '60%'}} src={transactionData}/>
                    <div style={{ float: "right", padding: 2 }}>
                    </div>
                </DialogContent>
              </Dialog>
            )}
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

      {uploadDocumentModal && (<UploadDocumentModal handleClose={refreshPage}></UploadDocumentModal>)}


    </Container>
    )
};

export default HomePage;
