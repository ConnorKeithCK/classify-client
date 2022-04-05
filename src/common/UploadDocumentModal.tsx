import {
  Alert,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

interface IUploadDocumentProps {
  handleClose: any;
}

export const UploadDocumentModal: React.FC<IUploadDocumentProps> = ({
  handleClose,
}) => {
  const { acceptedFiles, getInputProps, getRootProps } = useDropzone({
    accept: `application/pdf`,
    maxFiles: 1,
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  const handleSubmit = async (e: any) => {
    if (acceptedFiles.length == 1) {
      e.preventDefault();
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", acceptedFiles[0], acceptedFiles[0].name)

      console.log(formData)
      try {
        const response = await fetch("http://localhost:8080/documents", {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          throw new Error(response.statusText)
        }
        console.log(response)
      } catch (e) {
        console.log(e)
      }


      clearFiles();
      setIsUploading(false);
      handleClose();
    } else {
      console.log("error");
    }
  };

  const clearFiles = () => {
    acceptedFiles.length = 0;
  };

  return (
    <Dialog open={true}>
      <Paper elevation={3}>
        <DialogTitle>Upload a new document</DialogTitle>
        <Divider />
        <DialogContent>
          {acceptedFiles.length == 0 && (
            <Box
              {...getRootProps({
                style: {
                  display: "flex",
                  flexDirection: "column",
                  height: 150,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                  backgroundColor: "white",
                  border: "1px dashed gray",
                },
              })}
            >
              <input {...getInputProps()} />
              <Typography style={{ fontWeight: "bold" }} variant={"h4"}>
                Upload a document
              </Typography>
              <Typography sx={{ marginTop: 10 }}>
                Drag and drop your .pdf file here to upload it to the selected
                folder.
              </Typography>
              <Button
                sx={{
                  backgroundColor: "white",
                  textTransform: "inherit",
                  height: 30,
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 10,
                  width: 150,
                  fontWeight: "bold",
                  padding: 2,
                  fontSize: 14,
                  color: "#1976d2",
                  border: "1px solid #cfcdf9",
                }}
                variant="outlined"
              >
                Browse Files...
              </Button>
            </Box>
          )}
          {acceptedFiles.map((file: any) => (
            <li style={{ fontSize: 14 }} key={file.name}>
              {file.name}
            </li>
          ))}
          <div style={{ float: "right", padding: 2 }}>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: "white",
                textTransform: "inherit",
                height: 30,
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 10,
                width: 150,
                fontWeight: "bold",
                padding: 2,
                fontSize: 14,
                color: "#1976d2",
                border: "1px solid #cfcdf9",
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              sx={{
                backgroundColor: "white",
                textTransform: "inherit",
                height: 30,
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 10,
                width: 150,
                fontWeight: "bold",
                padding: 2,
                fontSize: 14,
                color: "#1976d2",
                border: "1px solid #cfcdf9",
              }}
              variant="outlined"
            >
              Upload
            </Button>
          </div>
        </DialogContent>
      </Paper>
      <Box sx={{ width: "100%", margin: 0 }}>
        {isUploading && <LinearProgress color="secondary" />}
      </Box>
      <Box sx={{ width: "100%", margin: 0 }}>
        {uploadError && (
          <Alert severity="error">Upload failed - an error has occured</Alert>
        )}
      </Box>
    </Dialog>
  );
};
