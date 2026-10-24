import React, { useState } from 'react';
import { Container, Paper, Grid, Button, Box } from '@mui/material';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import JobDescription from './components/JobDescription';

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDesc, setJobDesc] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      <Header />

      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Grid container spacing={3}>
          {/* File Upload Box */}
          <Grid item xs={12} md={6}>
            <FileUpload file={file} onFileChange={handleFileChange} />
          </Grid>

          {/* Job Description Box */}
          <Grid item xs={12} md={6}>
            <JobDescription value={jobDesc} onChange={setJobDesc} />
          </Grid>
        </Grid>

        {/* Action Button Area */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" size="large" sx={{ px: 5, py: 1.5, fontWeight: 'bold' }}>
            Analyze with AI
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}