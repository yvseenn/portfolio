import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Container } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
                <Box p={2} width="100%">
                    <Grid container justifyContent="center" spacing={2}>
                        {info.portfolio.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <PortfolioBlock
                                    image={project.image}
                                    live={project.live}
                                    source={project.source}
                                    title={project.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
