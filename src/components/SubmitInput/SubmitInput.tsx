import { useState } from "react";
import Button from "../Button/Button";
import { RxCross2 } from "react-icons/rx";

import "./SubmitInput.scss";

interface IProps {
  initialText?: string;
  input?: boolean;
  onButtonClick: (text: string) => void;
  onCloseButtonClick: (arg0: boolean) => void;
  buttonName: string;
}

const SubmitInput = ({
  initialText,
  onButtonClick,
  onCloseButtonClick,
  input,
  buttonName,
}: IProps) => {
  const [text, setText] = useState(initialText);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      onButtonClick(text || "");
    }
  }

  const handleClickAdd = (event: React.MouseEvent<any, MouseEvent>) => {
    event.preventDefault();
    onButtonClick(text || "");
  };

  const handleClickClose = (event: React.MouseEvent<any, MouseEvent>) => {
    event.preventDefault();
    onCloseButtonClick(false);
  };

  return (
    <>
      {input ? (
        <input
          className="taskInput"
          type="text"
          placeholder="Saisissez le titre de la liste…"
          value={text}
          onKeyDown={onKeyDown}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <textarea
          className="textareaInput"
          rows={2}
          placeholder="Saisissez un titre pour cette carte…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
        ></textarea>
      )}
      <div className="submitContainer">
        <Button primary onClick={handleClickAdd}>
          {buttonName}
        </Button>
        <Button ternary className="closeBtn">
          <span className="closeIcon" onClick={handleClickClose}>
            {" "}
            <RxCross2 />
          </span>
        </Button>
      </div>
    </>
  );
};

export default SubmitInput;
