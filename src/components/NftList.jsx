/**
 * 
 *  다음과 같을때 이름이 “Cat”일경우 😺 이름이  “Dog”일경우 🐶 화면에 보이도록 작성해보세요
 */
function NFT({ name, color, price }) {
  return (
    <div style={{ border: "1px solid black", width: "max-content" }}>
      <div style={{ background: color, width: 150, height: 200 }}></div>
      <div>
        <p>Name</p>
        <p>{name}</p>
      </div>
      <div>
        <p>Price</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

function NFTList() {
  return (
    <div>
      <NFT name="Cat" color="black" price="0.777 Either" />
      <NFT name="Dog" color="red" price="0.555 Either" />
    </div>
  );
}

export default NFTList;
