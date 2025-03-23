const Content = (props) => {
  return (
    <div>
      {props.part.map((value) => (
        <p>
          {value.name} {value.exercises}
        </p>
      ))}
    </div>
  );
};

export default Content;
