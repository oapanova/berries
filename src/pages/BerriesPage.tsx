import { useAppDispatch } from "@/store";
import { fetchBerries } from "@/store/berriesThunk";
import {Divider, Typography } from "@mui/material";
import {useEffect, type FC} from "react";
import {BerriesPageContainer, BerriesPageContent} from "./BerriesPage.styled";
import FirmnessSliderBlock from "@/components/berries/FirmnessSlider";
import BerriesList from "@/components/berries/BerriesList";

const BerriesPage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBerries());
    }, []);

    return (
        <BerriesPageContainer>
            <Typography variant="h4" component="h2" fontWeight="bold">
                Pok`e Berries
            </Typography>
            <Typography variant="body1" color="textSecondary">
               How tough are you?
            </Typography>
            <BerriesPageContent>
                <FirmnessSliderBlock />
                <Divider orientation="vertical" flexItem sx={{ mx: 2, borderStyle: "dashed" }}  />
                <BerriesList />
            </BerriesPageContent>
        </BerriesPageContainer>
    )
}

export default BerriesPage