function TodoItem({ title, isChecked }) {
  return (
    <li>
      {title} {isChecked && "✅ "}
    </li>
  );
}

function TodoList() {
  return (
    <section>
      <h1>후니의 투두리스트</h1>
      <ul>
        <TodoItem isChecked={true} title="방 청소하기" />
        <TodoItem isChecked={true} title="리엑트 복습하기" />
        <TodoItem isChecked={false} title="헬스장 가기" />
      </ul>
    </section>
  );
}

export default TodoList;
