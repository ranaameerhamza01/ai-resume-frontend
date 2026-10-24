import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h4" component="h1" fontWeight="bold" color="primary" gutterBottom>
        AI Resume & Career Coach Agent
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Optimize your resume, check ATS compatibility, and generate custom outreach messages instantly.
      </Typography>
    </Box>
  );
}