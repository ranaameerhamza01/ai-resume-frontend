import { AnalysisResult } from '../types';

export async function analyzeResume(file: File, jobDescription: string): Promise<AnalysisResult> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('job_description', jobDescription);

  const response = await fetch('http://localhost:8000/api/analyze', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to analyze resume');
  }

  return response.json();
}