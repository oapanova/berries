import {Box, Container, styled, TextField } from "@mui/material";

export const BerriesListContainer = styled(Container)(({ theme }) => ({
}))

export const BerryCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    paddingLeft: 0,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: theme.spacing(2),
    width: '100%',
}))

export const BerryImageContainer = styled(Box)({
    width: '70px',
    height: '70px',
    overflow: 'hidden',
    borderRadius: '0 50% 50% 0',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '8px',
    marginRight: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const BerryImage = styled('img')({
    width: '100%',
})

export const BerryChipsContainer = styled(Box)({
    display: 'flex',
    gap: '8px',
    marginLeft: 'auto',

    '& > .MuiChip-root': {
        color: 'rgba(0, 0, 0, 0.4)',
    }
})

export const SearchInputContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    marginLeft: 'auto',
    width: '30%',
}))

export const SearchInput = styled(TextField)(({ theme, ...props }) => ({
    width: '100%',
    '& .MuiInputBase-root': {
        borderRadius: '50px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
}))