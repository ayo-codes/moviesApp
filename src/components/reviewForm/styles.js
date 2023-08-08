const styles =  {
  root: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  root2: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: 2,
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: 2,
  },
  datePicker: {
    marginTop:2,
    marginBottom:2,
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
};
export default styles