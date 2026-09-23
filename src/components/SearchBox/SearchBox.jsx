import { Icon, Input, Wrapper } from './SearchBox.styled';

export const SearchBox = ({ value, onChange }) => {
  const handleChange = evt => {
    onChange(evt.target.value);
  };

  return (
    <Wrapper>
      <Icon />
      <Input type="text" value={value} onChange={handleChange} />
    </Wrapper>
  );
};
