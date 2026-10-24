import React from 'react';
import { Box, CircularProgress, Typography, Paper } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface LoadingSpinnerProps {
  message?: string;
}

export default function LoadingSpinner({ message = 'AI Coach is analyzing your resume...' }: LoadingSpinnerProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 4,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.88), rgba(243,247,255,0.95))',
        border: '1px solid rgba(148, 163, 184, 0.22)',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
        <CircularProgress size={70} thickness={4} color="primary" sx={{ opacity: 0.9 }} />
        <CircularProgress
          size={52}
          thickness={3.5}
          variant="determinate"
          value={75}
          color="secondary"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            '& .MuiCircularProgress-circle': {
              strokeDasharray: '160px',
              strokeDashoffset: '35px'
            }
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <AutoAwesomeIcon color="primary" sx={{ fontSize: 24 }} />
        </Box>
      </Box>

      <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700, mb: 1 }}>
        {message}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
        Matching ATS requirements, flagging missing skills, and generating a tailored career message...
      </Typography>
    </Paper>
  );
}