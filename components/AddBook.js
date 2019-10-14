import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textFieldLarge: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  textFieldMedium: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
  textFieldSmall: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 70,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function AddBook() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    bookName: '',
    bookPriceJpy: 0,
    bookPriceCny: 0,
    exchangeRate: 0.065,
    selectedDate: new Date(),
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleDateChange = name => date =>  {
    setValues({ ...values, [name]: date });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="purchaseDate"
          label="Purchase Date"
          value={values.selectedDate}
          onChange={handleDateChange('selectedDate')}
          className={classes.textFieldMedium}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <TextField
        id="bookName"
        label="Book Name"
        className={classes.textFieldLarge}
        values={values.bookName}
        onChange={handleChange('bookName')}
        margin="normal"
      />
      <TextField
        id="bookPriceJpy"
        label="Price(JPY)"
        value={values.bookPriceJpy}
        onChange={handleChange('bookPriceJpy')}
        type="number"
        className={classes.textFieldSmall}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: "0",
        }}
        margin="normal"
      />
      <TextField
        id="exchangeRate"
        label="Rate"
        value={values.exchangeRate}
        onChange={handleChange('exchangeRate')}
        type="number"
        className={classes.textFieldSmall}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: "0.0",
          step: "0.001",
        }}
        margin="normal"
      />
      <TextField
        id="bookPriceCny"
        label="Price(CNY)"
        value={(values.bookPriceJpy * values.exchangeRate).toFixed(1)}
        onChange={handleChange('bookPriceCny')}
        type="number"
        className={classes.textFieldSmall}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: "0.0",
        }}
        margin="normal"
      />
    </form>
  );
}
