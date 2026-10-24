import React, { useState } from 'react';
import { Container, Paper, Button, Box, CircularProgress } from '@mui/material';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import JobDescription from './components/JobDescription';
import ResultsDisplay from './components/ResultsDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { analyzeResume } from './services/api';
import type { AnalysisResult } from './types';

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const [jobDesc, setJobDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file || !jobDesc.trim()) {
      alert('Please upload a resume PDF and enter the job description!');
      return;
    }

    setLoading(true);
    setResults(null);

    try {
      const result = await analyzeResume(file, jobDesc);
      setResults(result);
    } catch (error) {
      console.error(error);
      alert('Unable to analyze the resume right now. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, md: 6 },
        background: 'radial-gradient(circle at top left, rgba(25, 118, 210, 0.14), transparent 26%), linear-gradient(180deg, #eef5ff 0%, #f7f9fc 100%)'
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Header />

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 5,
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            boxShadow: '0 25px 60px rgba(15, 23, 42, 0.08)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, gap: 3 }}>
            <FileUpload file={file} onFileChange={handleFileChange} />
            <JobDescription value={jobDesc} onChange={setJobDesc} />
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleAnalyze}
              disabled={loading}
              sx={{
                px: 6,
                py: 1.8,
                borderRadius: 3,
                fontSize: '1.05rem',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: '0 8px 20px rgba(25, 118, 210, 0.3)',
                background: 'linear-gradient(45deg, #1976d2 30%, #1565c0 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1565c0 30%, #0e46a3 90%)',
                }
              }}
            >
              {loading ? <CircularProgress size={26} color="inherit" /> : 'Analyze with AI Coach'}
            </Button>
          </Box>
        </Paper>

        {loading && <LoadingSpinner />}

        {results && (
          <ResultsDisplay
            score={results.score}
            feedback={results.feedback}
            coverLetter={results.coverLetter}
          />
        )}
      </Container>
    </Box>
  );
}