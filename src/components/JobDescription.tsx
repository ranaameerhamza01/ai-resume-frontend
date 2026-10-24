import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

interface JobDescriptionProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JobDescription({ value, onChange }: JobDescriptionProps) {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        2. Paste Target Job Description (JD)
      </Typography>
      <TextField
        placeholder="Paste target job requirements, skills, and responsibilities here..."
        multiline
        rows={4}
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
}