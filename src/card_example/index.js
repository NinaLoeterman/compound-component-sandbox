import Card from "./components/Card";
import CardItem from "./components/CardItem";
import content from "./content";

const CardExample = () => {
  return (
    <div>
      <Card>
        <Card.CardContent content={content}>
          {content.map((item, index) => {
            return <CardItem key={index} item={item} />;
          })}
        </Card.CardContent>

        <Card.Expand>
          <div>show more</div>
        </Card.Expand>

        <Card.Collapse>
          <div>show less</div>
        </Card.Collapse>
      </Card>
    </div>
  );
};

export default CardExample;
