import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";

const LIMIT = 3;

const CardContext = createContext();

const Card = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const expand = () => {
    setIsCollapsed(!isCollapsed);
  };
  const collapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const value = { isCollapsed, expand, collapse };
  return (
    <CardContext.Provider value={value}>
      {children}
    </CardContext.Provider>
  );
};

const CardContent = ({ children }) => {
  const { isCollapsed } = useContext(CardContext);
  return children.map((child, index) => {
    if (isCollapsed) {
      while (LIMIT > index) {
        return <div key={index}>{child}</div>;
      }
    } else {
      return <div key={index}>{child}</div>;
    }
  });
};

const Expand = ({ children }) => {
  const { expand, isCollapsed } = useContext(CardContext);
  return isCollapsed && cloneElement(children, { onClick: expand });
};
const Collapse = ({ children }) => {
  const { collapse, isCollapsed } = useContext(CardContext);
  return !isCollapsed && cloneElement(children, { onClick: collapse });
};

Card.CardContent = CardContent;
Card.Expand = Expand;
Card.Collapse = Collapse;

export default Card;
