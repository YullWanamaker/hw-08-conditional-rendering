/**
 * Member컴포넌트 내에서
 * 3항 연산자로 되어있는 것을 조건문(if ~ else if ~..)
 * 을 활용해서 가독성이 좋은 코드로 변경해보세요.
 */

function Member({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>본명</dt>
        <dd>
          {name === "지수"
            ? "김지수"
            : name === "리사"
            ? "라리사 마노반"
            : "박채영"}
        </dd>
        <dt>출생지</dt>
        <dd>
          {name === "지수"
            ? "군포시 산본동"
            : name === "리사"
            ? "태국 부리람 주"
            : "뉴질랜드 오클랜드"}
        </dd>
        <dt>나이</dt>
        <dd>{name === "지수" ? 27 : name === "리사" ? 25 : 26}</dd>
      </dl>
    </section>
  );
}

export default function Group() {
  return (
    <div>
      <Member name="지수" />
      <Member name="리사" />
      <Member name="로제" />
    </div>
  );
}
