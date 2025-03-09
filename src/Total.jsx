const Total = (props) => {
  let suma = 0;
  props.exercises.map((value) => (suma = value.exercises + suma));
  return (
    <div>
      <p>Number of exercises {suma}</p>
    </div>
  );
};
export default Total;
