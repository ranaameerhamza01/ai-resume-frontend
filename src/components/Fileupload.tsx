import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface FileUploadProps {
  file: File | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUpload({ file, onFileChange }: FileUploadProps) {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        1. Upload Your Resume (PDF)
      </Typography>
      <Button
        variant="outlined"
        component="label"
        fullWidth
        sx={{
          height: '110px',
          borderStyle: 'dashed',
          borderWidth: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          textTransform: 'none',
        }}
      >
        <CloudUploadIcon fontSize="large" color="primary" />
        <Typography variant="body2" color="text.primary" fontWeight="medium">
          {file ? file.name : 'Click to select or drag PDF resume here'}
        </Typography>
        <input type="file" hidden accept=".pdf" onChange={onFileChange} />
      </Button>
    </Box>
  );
}