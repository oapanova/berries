import {Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BerriesPageContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4),
    maxWidth: '90%',
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginTop: theme.spacing(4),
}))

export const BerriesPageContent = styled(Box)(({ theme }) => ({
    display: 'flex',
}))