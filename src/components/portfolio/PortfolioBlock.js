import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image, live, source, title } = props;

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow={3}
            p={3}
            borderRadius={12}
            maxWidth={350}
            height="85%"
            marginTop={9} // Increase top margin
        >
            <Box component="img" src={image} alt="image" width="100%" borderRadius={12} mb={3} />
            <h1 style={{ fontSize: '1.8rem', textAlign: 'center', margin: 3 }}>{title}</h1>
            <Box className="portfolio" display="flex" flexDirection="column" gap={2} alignItems="center">
                <Box>
                    <IconLink link={live} title="Live Demo" icon="fa fa-safari" />
                </Box>
                <Box>
                    <IconLink link={source} title="Source Code" icon="fa fa-code" />
                </Box>
            </Box>
        </Box>
    );
}

export default PortfolioBlock;
