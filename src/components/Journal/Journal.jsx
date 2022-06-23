import { toBeValid } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import { Input, Button } from "rsuite";
import classes from "./Form.module.css";

const Journal = () => {
  return (
    <div className={classes.box}>
      <form>
        <label htmlFor="journal">Journal Entry</label>
        {/* <textarea value={journalData} onChange={onChangeHandler} rows="5"></textarea> */}
        <Input value={journalData} onChange={onChangeHandler} name="journal" as="textarea" rows={3} placeholder="Textarea" />

        <Button onClick={onClickHandler} appearance="primary" color="green">Submit Form</Button>
      </form>
    </div>
  );
};

export default Form;
