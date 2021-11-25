import Collapsable from "./components/Collapsable";

const content = [
  "This is one string",
  "And this is a second",
  "Third string it is",
  "Fourth string",
  "fifth string it is",
  "sixth",
];

const CardExample = () => {
  return (
    <div>
      <Collapsable>
        <Collapsable.CardContent content={content} />

        <Collapsable.Expand>
          <div>show more</div>
        </Collapsable.Expand>

        <Collapsable.Collapse>
          <div>show less</div>
        </Collapsable.Collapse>
        
      </Collapsable>
    </div>
  );
};

export default CardExample;
