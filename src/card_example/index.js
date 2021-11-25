import Collapsable from "./components/Collapsable";
import content from "./content";

const CardExample = () => {
  return (
    <div>
      <Collapsable>
        <Collapsable.CardContent content={content}>
          {content.map((item, index) => {
            return (
              <div key={index}>
                <a href={item.url}>{item.displayName}</a>
              </div>
            );
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
