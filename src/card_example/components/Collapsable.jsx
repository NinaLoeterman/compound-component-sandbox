import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";

const CollapsableContext = createContext();

const Collapsable = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const expand = () => {
    setIsCollapsed(!isCollapsed);
  };
  const collapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const value = { isCollapsed, setIsCollapsed, expand, collapse };
  return (
    <CollapsableContext.Provider value={value}>
      {children}
    </CollapsableContext.Provider>
  );
};

const CardContent = ({ content }) => {
  const LIMIT = 3;
  const { isCollapsed } = useContext(CollapsableContext);
  return content.map((item, index) => {
    if (isCollapsed) {
      while (LIMIT > index) {
        return <div key={index}>{item}</div>;
      }
    } else {
      return <div key={index}>{item}</div>;
    }
  });
};

const Expand = ({ children }) => {
  const { expand, isCollapsed } = useContext(CollapsableContext);
  return isCollapsed && cloneElement(children, { onClick: expand });
};
const Collapse = ({ children }) => {
  const { collapse, isCollapsed } = useContext(CollapsableContext);
  return !isCollapsed && cloneElement(children, { onClick: collapse });
};

Collapsable.CardContent = CardContent;
Collapsable.Expand = Expand;
Collapsable.Collapse = Collapse;

export default Collapsable;
