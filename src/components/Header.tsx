import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Header() {
  return (
    <Box sx={{ textAlign: 'center', mb: 5, mt: 2 }}>
      <Stack direction="row" spacing={1} sx={{ mb: 1.5, justifyContent: 'center', alignItems: 'center' }}>
        <AutoAwesomeIcon color="primary" fontSize="small" />
        <Chip
          label="Powered by Gemini AI"
          color="primary"
          size="small"
          variant="outlined"
          sx={{ fontWeight: 600, borderRadius: 2 }}
        />
      </Stack>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          background: 'linear-gradient(45deg, #1976d2 30%, #9c27b0 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px',
          mb: 1,
          fontWeight: 800
        }}
      >
        AI Resume & Career Coach
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
        Optimize your resume for ATS algorithms, discover missing keywords, and generate targeted outreach messages instantly.
      </Typography>
    </Box>
  );
}