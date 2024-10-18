"use client"
import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { fetchPosts } from '../../utils/api';

const AboutPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = async () => {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
    };

    useEffect(() => {
        getPosts(); // 첫 로드 시 데이터 가져오기
        const interval = setInterval(getPosts, 5000); // 5초마다 업데이트
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Test
            </Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {posts.map((post: { id: number; name: string; age: number }) => (
                                <TableRow key={post.id}>
                                    <TableCell>{post.id}</TableCell>
                                    <TableCell>{post.name}</TableCell>
                                    <TableCell>{post.age}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
};

export default AboutPage;





