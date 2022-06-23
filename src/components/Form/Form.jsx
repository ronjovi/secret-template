import { toBeValid } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import { Input, Button } from "rsuite";
import classes from "./Form.module.css";

const Form = () => {
  const [journalList, setJournalList] = useState([
    "journal 1",
    "journal 2",
    "journal 3",
  ]);
  const [journalData, setJournalData] = useState("asdasdasdasd");

  const onClickHandler = () => {
    setJournalList([...journalList, journalData]);
    setJournalData('')
  };

  const onChangeHandler = (val) => {
    console.log(val);
    setJournalData(val);
  };

  return (
    <div className={classes.box}>
      {journalList.map((journal) => (
        <p>{journal}</p>
      ))}

      <form>
        <label htmlFor="journal">Journal Entry</label>
        {/* <textarea value={journalData} onChange={onChangeHandler} rows="5"></textarea> */}
        <Input
          value={journalData}
          onChange={onChangeHandler}
          name="journal"
          as="textarea"
          rows={3}
          placeholder="Textarea"
        />

        <Button onClick={onClickHandler} appearance="primary" color="green">
          Submit Form
        </Button>
      </form>
    </div>
  );
};

export default Form;
