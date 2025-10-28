import {Box, Slider, Typography, type SliderProps } from "@mui/material";
import {styled} from "@mui/material/styles";
import {type TypographyProps} from "@mui/material/Typography";

const thumbShadowColors = {
    20: '#b8f69f',    // Very Soft - Light Green
    35: '#b8f69f',   // Soft - Light Green
    50: '#FF8C00',   // Hard - Orange
    65: '#ff0015',   // Very Hard - Red
    80: '#ff0015',  // Super Hard - Red
}

const thumbColors = {
    20: 'rgba(184,246,159,0.5)',    // Very Soft - Light Green
    35: 'rgba(184,246,159,0.5)',   // Soft - Light Green
    50: 'rgba(255,140,0,0.5)',   // Hard - Orange
    65: 'rgba(255,0,21,0.5)',   // Very Hard - Red
    80: 'rgba(255,0,21,0.5)',  // Super Hard - Red
}

export const FirmnessSliderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    minWidth: '250px',
    height: '400px',
    padding: theme.spacing(5),
}));

type TOwnerStateType = SliderProps & {
    value: number;
}

export const FirmnessSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== 'value'
})<TOwnerStateType>(({ theme, value }) => ({
    width: '32px',
    overflow: 'hidden',
    padding: 0,
    marginRight: theme.spacing(2),

  '& .MuiSlider-thumb': {
      backgroundColor: '#fff',
      height: '25px',
      width: '25px',
      boxShadow:
          `0 0 10px 10px ` +
          (value !== undefined && thumbShadowColors[value as keyof typeof thumbShadowColors]
              ? thumbShadowColors[value as keyof typeof thumbShadowColors]
              : '#b8f69f') + '!important',

        '&::before': {
          boxShadow: '0px -3px 11px 5px rgba(0,0,0,0.12), inset -1px -4px 11px 0px ' + (value !== undefined && thumbColors[value as keyof typeof thumbColors])
        }
  },
    '& .MuiSlider-rail': {
        opacity: 0.5,
        backgroundColor: '#fff',
        width: '31px',
        borderRadius: '50px',
        border: '1px solid lightgrey',
    },

    '& .MuiSlider-track': {
        backgroundColor: '#fff',
    },

    '& .MuiSlider-mark': {
        backgroundColor: '#fff',
    }
}));

export const FirmnessSliderLabelBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    height: '100%',
    marginLeft: theme.spacing(2),
    minWidth: '76px',
    flexShrink: 0,
}))

type TLabelStateType = TypographyProps & {
    className: string;
    value: number;
    key: string | number;
}

export const FirmnessSliderLabel = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'value'
})<TLabelStateType>(({ theme, key, value }) => ({
    fontSize: '14px',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    '&.active p': {
        fontWeight: 'bold',
        color: thumbShadowColors[value as keyof typeof thumbShadowColors],
    },
    '& span': {
        fontSize: '12px',
        color: theme.palette.text.secondary,
    },
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'start',
}))
