import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";

const CollapsableContext = createContext();

const Collapsable = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const value = { isCollapsed, setIsCollapsed, toggleCollapse };
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

const ToggleCollapse = ({ children }) => {
  const { toggleCollapse } = useContext(CollapsableContext);
  return cloneElement(children, { onClick: toggleCollapse });
};

Collapsable.CardContent = CardContent;
Collapsable.ToggleCollapse = ToggleCollapse;

export default Collapsable;
