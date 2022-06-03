export default function GameDisplay(props) {
  const { countries, num, score } = props;

  return (
    <div class="d-flex flex-column align-items-center">
      <h3 class="my-3" style={{ "text-align": "center" }}>
        Win: {score().win} || Loss: {score().lose}
      </h3>

      <div class="my-card card mb-5" style={card}>
        <img
          class="card-img"
          src={countries()[num()].flag}
          style={img}
          alt=""
        />
      </div>
    </div>
  );
}

const card = {
  "background-color": "#aaa"
};

const img = {
  width: "100%",
  height: "100%",
  "object-fit": "contain"
};
