import "./TodoItem.css";

const TodoItem: React.FC<{ 
  name: string; 
  done: boolean; 
  number: number ;
  coment:string
}> = (
 {done,number,name}
) => {
  return (
    <tr>
      <td>{number + 1}</td>
      <td>{name}</td>
      <td>{done ? "Done" : "Not done"}</td>
      <td></td>
    </tr>
  );
};

export default TodoItem;
