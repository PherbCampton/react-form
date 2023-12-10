import React from "react";
import { Tabs, Section, Wrapper } from "./Tab.styles";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface TabProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ activeTab, onTabChange }) => {
  const tabs = ["Enroll", "Dashboard"];
  const [parent] = useAutoAnimate();

  return (
    <Wrapper>
      <Tabs ref={parent}>
        {tabs.map((tab, index) => (
          <Section
            key={index}
            className={`${activeTab === index ? "active" : ""}`}
            onClick={() => onTabChange(index)}
          >
            {tab}
          </Section>
        ))}
      </Tabs>
    </Wrapper>
  );
};

export default Tab;
