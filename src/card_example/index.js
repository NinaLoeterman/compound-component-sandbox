import Collapsable from "./components/Collapsable";

const content = [
  { displayName: "Google", url: "http://google.com" },
  { displayName: "Ynet", url: "http://ynet.co.il" },
  { displayName: "New York Times", url: "http://nytimes.com" },
  { displayName: "Google", url: "http://google.com" },
  { displayName: "Google", url: "http://google.com" },
  { displayName: "Google", url: "http://google.com" },
  { displayName: "Google", url: "http://google.com" },
  { displayName: "Google", url: "http://google.com" },
];

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
