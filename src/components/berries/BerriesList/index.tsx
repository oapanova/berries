import {type FC, Fragment} from "react";
import {
    BerriesListContainer,
    BerryCard,
    BerryChipsContainer,
    BerryImage,
    BerryImageContainer, SearchInput, SearchInputContainer
} from "./BerriesList.styled";
import {useBerriesList} from "./useBerriesList";
import BerryLogo from "@/assets/berry.jpg";
import { Chip, TextField } from "@mui/material";

const BerriesList: FC = () => {
    const {filteredBerries, search, setSearch} = useBerriesList();
    return (
        <BerriesListContainer>
            <SearchInputContainer>
                <SearchInput placeholder="Search by name.."
                             value={search}
                             onChange={(e) => setSearch(e.target.value)}
                />
            </SearchInputContainer>
            {filteredBerries.map((berry) => (
                <BerryCard key={berry.id}>
                    <BerryImageContainer>
                        <BerryImage src={BerryLogo} alt={berry.name}/>
                    </BerryImageContainer>
                    {berry.name}
                    <BerryChipsContainer>
                        {berry.flavors.map((flavor) => (
                           <Fragment key={flavor.flavor.name}>{flavor.potency > 0 && <Chip label={flavor.flavor.name}/>}</Fragment>
                        ))}
                    </BerryChipsContainer>
                </BerryCard>
            ))}
        </BerriesListContainer>
    )
}

export default BerriesList;