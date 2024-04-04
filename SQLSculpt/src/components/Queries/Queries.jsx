import { useState } from "react";
import { Heading, LinkButton, Message, Text, Icon } from "@innovaccer/design-system";
import _get from "lodash/get";

import {
  predefinedQueryList,
  querySectionLabel,
  useQueryButton,
  noLabelFound,
  expandableButton,
  hideExpandableButton
} from "../../constants";
import "../SqlEditor/styles.css";

const Queries = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const getLinkButton = () => {
    return (
      <LinkButton
        aria-label="right"
        icon={isExpanded ? "keyboard_arrow_up_round" : "keyboard_arrow_down_round"}
        iconAlign="right"
        className="pt-1 ml-4"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? hideExpandableButton : expandableButton}
      </LinkButton>
    );
  };

  const renderQuery = () => {
    return predefinedQueryList.map((queryItem, idx) => {
      return (
        <Message
          className="message-container mt-4 mb-4"
          key={_get(queryItem, "id", idx)}
          actions={<LinkButton>{useQueryButton}</LinkButton>}
        >
          <Text weight="strong">{_get(queryItem, "label", noLabelFound)}</Text>
        </Message>
      );
    });
  };
  return (
    <div className="wrapper">
      <div className="d-flex">
        <Heading size="m" data-test="heading-for-predefined-queries">
          <Icon size={24} name="query_stats" className="icon" /> {querySectionLabel}
        </Heading>
        {getLinkButton()}
      </div>
      {isExpanded && renderQuery()}
    </div>
  );
};

export default Queries;
