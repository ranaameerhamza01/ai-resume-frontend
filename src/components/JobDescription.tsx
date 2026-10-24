import React from 'react';
import { Typography, TextField, Paper } from '@mui/material';

interface JobDescriptionProps {
  value: string;
  onChange: (val: string) => void;
}

export default function JobDescription({ value, onChange }: JobDescriptionProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'grey.300',
        height: '100%',
        boxSizing: 'border-box',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(248,250,252,0.9))'
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        Target Job Description
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Paste the requirements or role details you are applying for.
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={5}
        placeholder="e.g. Seeking a Front-End Developer with strong React, TypeScript, and Material UI skills..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: '#ffffff'
          }
        }}
      />
    </Paper>
  );
}