import { Dialog, DialogTitle } from '@mui/material'
import React from 'react'

interface IUploadDocumentProps {
    handleClose: any
}

export const UploadDocumentModal: React.FC<IUploadDocumentProps> = (props) => {
    return (
        <Dialog open={true} onClose={props.handleClose}>
            <DialogTitle>Upload a new document</DialogTitle>
        </Dialog>
    )
}