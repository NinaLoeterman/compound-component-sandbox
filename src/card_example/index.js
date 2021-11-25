import Collapsable from "./components/Collapsable";

const content = ['This is one string', 'And this is a second', 'Third string it is', 'Fourth string', 'fifth string it is', 'sixth']

const CardExample = () => {
  return (
    <div>
      <Collapsable>
        <Collapsable.CardContent content={content} />
        <Collapsable.ToggleCollapse>
            <div>toggle me</div>
        </Collapsable.ToggleCollapse>
      </Collapsable>
    </div>
  );
};

export default CardExample;