import React from 'react';
import { Box, Typography, Paper, LinearProgress, Divider, Stack, Chip, Card, CardContent } from '@mui/material';

interface ResultsProps {
  score: number;
  feedback: string;
  coverLetter: string;
}

export default function ResultsDisplay({ score, feedback, coverLetter }: ResultsProps) {
  const getScoreColor = (val: number) => {
    if (val >= 80) return 'success';
    if (val >= 60) return 'warning';
    return 'error';
  };

  const feedbackItems = feedback
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^•\s*/, ''));

  return (
    <Card elevation={0} sx={{ mt: 4, borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(148,163,184,0.2)', boxShadow: '0 22px 50px rgba(15,23,42,0.08)' }}>
      <Box sx={{ background: 'linear-gradient(90deg, #0f172a 0%, #1d4ed8 100%)', px: 4, py: 2.5, color: 'white' }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          AI Resume Analysis Results
        </Typography>
      </Box>

      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" sx={{ mb: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              ATS Match Score
            </Typography>
            <Chip
              label={`${score}% Match`}
              color={getScoreColor(score)}
              sx={{ fontWeight: 700, fontSize: '0.95rem', px: 1 }}
            />
          </Stack>
          <LinearProgress
            variant="determinate"
            value={score}
            color={getScoreColor(score)}
            sx={{ height: 12, borderRadius: 6, backgroundColor: 'grey.200' }}
          />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }} color="primary.main">
            Recommendations & Missing Keywords
          </Typography>
          <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 3, bgcolor: '#f8fafc', borderColor: 'rgba(148, 163, 184, 0.25)' }}>
            <Box component="ul" sx={{ m: 0, pl: 3, display: 'grid', gap: 1.25 }}>
              {feedbackItems.map((item) => (
                <Box component="li" key={item} sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                  {item}
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }} color="primary.main">
            Targeted Outreach / Cover Message
          </Typography>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, bgcolor: '#f1f5f9', borderLeft: '4px solid #1976d2', borderColor: 'rgba(148, 163, 184, 0.25)' }}>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line', fontFamily: 'monospace', fontSize: '0.9rem', color: '#1e293b', lineHeight: 1.8 }}>
              {coverLetter}
            </Typography>
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
}