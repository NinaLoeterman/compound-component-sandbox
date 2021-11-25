import Collapsable from "./components/Collapsable";
import CardItem from "./components/CardItem";
import content from "./content";

const CardExample = () => {
  return (
    <div>
      <Collapsable>
        <Collapsable.CardContent content={content}>
          {content.map((item, index) => {
            return <CardItem key={index} item={item} />;
          })}
        </Collapsable.CardContent>

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
