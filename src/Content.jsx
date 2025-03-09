// import Part from "./Part";
// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.part} exercises={props.exercises} />
//     </div>
//   );
// };
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
