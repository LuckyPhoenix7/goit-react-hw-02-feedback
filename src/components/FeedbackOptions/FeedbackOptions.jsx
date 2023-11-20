import { OptionsContainer, OptionBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onClickButton }) => {
  return (
    <OptionsContainer>
      <OptionBtn
        type="button"
        name="Good"
        onClick={() => onClickButton('Good')}
      >
        Good
      </OptionBtn>
      <OptionBtn
        type="button"
        name="Neutral"
        onClick={() => onClickButton('Neutral')}
      >
        Neutral
      </OptionBtn>
      <OptionBtn type="button" name="Bad" onClick={() => onClickButton('Bad')}>
        Bad
      </OptionBtn>
    </OptionsContainer>
  );
};
