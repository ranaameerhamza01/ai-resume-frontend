import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

interface FileUploadProps {
  file: File | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUpload({ file, onFileChange }: FileUploadProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        textAlign: 'center',
        borderRadius: 4,
        borderStyle: 'dashed',
        borderWidth: 2,
        minHeight: '100%',
        borderColor: file ? 'success.main' : 'primary.light',
        background: file ? 'linear-gradient(180deg, rgba(76,175,80,0.05), rgba(255,255,255,0.9))' : 'linear-gradient(180deg, rgba(25,118,210,0.06), rgba(255,255,255,0.9))',
        transition: 'all 0.25s ease',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 16px 28px rgba(25, 118, 210, 0.12)'
        }
      }}
    >
      <input
        accept="application/pdf"
        style={{ display: 'none' }}
        id="resume-file-input"
        type="file"
        onChange={onFileChange}
      />
      <label htmlFor="resume-file-input">
        <Box sx={{ cursor: 'pointer', py: 1 }}>
          {file ? (
            <>
              <InsertDriveFileIcon color="success" sx={{ fontSize: 42, mb: 1 }} />
              <Typography color="success.main" variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {file.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                File attached successfully! Click to change.
              </Typography>
            </>
          ) : (
            <>
              <CloudUploadIcon color="primary" sx={{ fontSize: 42, mb: 1 }} />
              <Typography variant="h6" color="text.primary" sx={{ fontWeight: 600, mb: 1 }}>
                Upload Resume (PDF)
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Drag and drop your file here or click to browse
              </Typography>
              <Button variant="outlined" component="span" sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600 }}>
                Choose PDF File
              </Button>
            </>
          )}
        </Box>
      </label>
    </Paper>
  );
}