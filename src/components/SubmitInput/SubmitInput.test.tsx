import { render, fireEvent } from '@testing-library/react';
import { RxCross2 } from 'react-icons/rx';
import Button from '../Button/Button';
import SubmitInput from './SubmitInput';

test('SubmitInput should render an input field', () => {
  const { getByPlaceholderText } = render(
    <SubmitInput
      initialText=""
      input={true}
      onButtonClick={() => {}}
      onCloseButtonClick={() => {}}
      buttonName="Add"
    />
  );
  expect(getByPlaceholderText('Saisissez le titre de la liste…')).toBeInTheDocument();
});

test('SubmitInput should render a textarea', () => {
  const { getByPlaceholderText } = render(
    <SubmitInput
      initialText=""
      input={false}
      onButtonClick={() => {}}
      onCloseButtonClick={() => {}}
      buttonName="Add"
    />
  );
  expect(getByPlaceholderText('Saisissez un titre pour cette carte…')).toBeInTheDocument();
});

test('SubmitInput should update the value of the input field', () => {
  const { getByPlaceholderText } = render(
    <SubmitInput
      initialText=""
      input={true}
      onButtonClick={() => {}}
      onCloseButtonClick={() => {}}
      buttonName="Add"
    />
  );
  const input: any = getByPlaceholderText('Saisissez le titre de la liste…');
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input.value).toBe('test');
});

test('SubmitInput should call the onButtonClick function when the add button is clicked', () => {
  const onButtonClick = jest.fn();
  const { getByText } = render(
    <SubmitInput
      initialText=""
      input={true}
      onButtonClick={onButtonClick}
      onCloseButtonClick={() => {}}
      buttonName="Add"
    />
  );
  const button = getByText('Add');
  fireEvent.click(button);
  expect(onButtonClick).toHaveBeenCalled();
});

test('SubmitInput should call the onCloseButtonClick function when the close button is clicked', () => {
  const onCloseButtonClick = jest.fn();
  const handleClickClose = (event: React.MouseEvent<any, MouseEvent>) => {
    event.preventDefault();
    onCloseButtonClick(false);
  };
  const { getByTestId } = render(
    <><SubmitInput
          initialText=""
          input={true}
          onButtonClick={() => { } }
          onCloseButtonClick={onCloseButtonClick}
          buttonName="Add" />
          <Button ternary className="closeBtn" data-testid="close-button" onClick={handleClickClose}>
              <span className="closeIcon" >
                  {" "}
                  <RxCross2 />
              </span>
          </Button></>

  );
  const button = getByTestId('close-button');
  fireEvent.click(button);
  expect(onCloseButtonClick).toHaveBeenCalled();
});
