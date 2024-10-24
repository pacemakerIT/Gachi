'use client';

import React, { useEffect, useState } from 'react';
import { CircularProgress, Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

// Define the interface for program data
interface Program {
  programId: string;
  title: string;
  coast: number;
  status?: 'New' | 'Sales';
  hostName: string;
  thumbnailUrl: string; // Add thumbnail URL if needed
}

export default function Program() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrograms = async () => {
      try {
        const res = await fetch('/api/programs'); // Call Next.js API
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setPrograms(data); // Set fetched data to state
      } catch (error) {
        console.error('Failed to fetch programs:', error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    getPrograms(); // Fetch programs on component mount
  }, []);

  return (
    <Box>
      {loading ? (
        <CircularProgress /> // Show loading spinner
      ) : (
        <Box sx={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {programs.map((program) => (
            <Card key={program.programId} sx={{ maxWidth: 345 }}>
              {/* Use program.programId as key to avoid the warning */}
              <CardMedia
                component="img"
                height="140"
                image={program.thumbnailUrl}
                alt={program.title}
              />
              <CardContent>
                <Typography variant="h6">{program.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {program.coast} USD
                </Typography>
                {program.status && (
                  <Typography variant="body2" color="primary">
                    Status: {program.status}
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                  Host: {program.hostName}
                </Typography>
              </CardContent>
            </Card>
          ))}
          
        </Box>
      )}
    </Box>
  );
}
