import {type FC} from "react";
import {
    FirmnessSlider,
    FirmnessSliderContainer,
    FirmnessSliderLabel,
    FirmnessSliderLabelBox
} from "./FirmnessSlider.styled";
import {useFirmnessSlider} from "./useFirmnessSlider";
import {marks} from "./marks";

const FirmnessSliderBlock: FC = () => {
    const {sliderValue, setFirmness, firmnessAmount} = useFirmnessSlider();
    return (
        <FirmnessSliderContainer>
            <FirmnessSlider orientation={'vertical'}
                            marks={marks}
                            track={false}
                            step={null}
                            defaultValue={35}
                            min={15}
                            max={85}
                            value={sliderValue}
                            onChange={(e, value) => setFirmness(Number(value))}/>
            <FirmnessSliderLabelBox>
                {[...marks].reverse().map((mark) =>
                    (
                        <FirmnessSliderLabel key={mark.value}
                                             className={mark.value === sliderValue ? 'active' : ''}
                                             value={sliderValue}
                        >
                            <p>{mark.label}</p>
                            <span>
                                {`${firmnessAmount[mark.label.toLocaleLowerCase().split(' ').join('-') as keyof typeof firmnessAmount] ?? 0}`}
                            </span>
                        </FirmnessSliderLabel>
                    )
                )}
            </FirmnessSliderLabelBox>
        </FirmnessSliderContainer>
    )
}

export default FirmnessSliderBlock;