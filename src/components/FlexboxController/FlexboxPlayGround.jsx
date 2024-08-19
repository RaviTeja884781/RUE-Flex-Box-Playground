import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  Dropdown,
  Box,
  Paragraph,
  Form,
  Divider,
  CloseButton,
} from "react-ui-essentials";
import styles from "./FlexboxPlayGround.module.css";
import SyntaxHighLighter from "../SyntaxHighLighter/SyntaxHighLighter";

const FlexboxPlayGround = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("flex-start");
  const [flexWrap, setFlexWrap] = useState("nowrap");
  const [gap, setGap] = useState("0px");
  const [rowGap, setRowGap] = useState("0px");
  const [columnGap, setColumnGap] = useState("0px");
  const [alignSelf, setAlignSelf] = useState("auto");
  const [order, setOrder] = useState("0");
  const [flexGrow, setFlexGrow] = useState("0");
  const [flexShrink, setFlexShrink] = useState("1");
  const [flexBasis, setFlexBasis] = useState("auto");
  const [flex, setFlex] = useState("0 1 auto");
  const [divs, setDivs] = useState(Array.from({ length: 15 }, (_, i) => i));
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  const colors = [
    "coral",
    "lightblue",
    "lightgreen",
    "pink",
    "yellow",
    "purple",
    "orange",
    "cyan",
    "magenta",
    "lime",
  ];

  useEffect(() => {
    const css = `
.flex-container {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
  flex-wrap: ${flexWrap};
  gap: ${gap};
  row-gap: ${rowGap};
  column-gap: ${columnGap};
  height: 200px;
  width: 100%;
  background-color: #ddd;
}

.flex-item {
  width: 100px;
  height: 80px;
  margin: 5px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-item:nth-child(1) {
  align-self: ${alignSelf};
  order: ${order};
  flex-grow: ${flexGrow};
  flex-basis: ${flexBasis};
  flex-shrink: ${flexShrink};
  flex: ${flex};
}
`;
    setCssCode(css);

    const html = `
<div class="flex-container">
${divs
  .map(
    (_, i) =>
      `  <div class="flex-item" style="background-color: ${
        colors[i % colors.length]
      };">Item ${i + 1}</div>`
  )
  .join("\n")}
</div>
`;
    setHtmlCode(html);
  }, [
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
    flexWrap,
    gap,
    rowGap,
    columnGap,
    alignSelf,
    order,
    flexGrow,
    flexBasis,
    flexShrink,
    flex,
    divs,
  ]);

  const addDiv = useCallback(() => {
    setDivs((prevDivs) => [...prevDivs, prevDivs.length]);
  }, []);

  const deleteDiv = useCallback((index) => {
    setDivs((prevDivs) => prevDivs.filter((_, i) => i !== index));
  }, []);

  const clearDivs = useCallback(() => {
    setDivs([]);
  }, []);

  const containerStyles = {
    display: "flex",
    flexDirection,
    justifyContent,
    alignItems,
    alignContent,
    flexWrap,
    gap,
    rowGap,
    columnGap,
    alignSelf,
    order,
    flexGrow,
    flexBasis,
    flexShrink,
    flex,
    width: "60%",
    padding: "5px",
    overflow: "auto",
  };

  const itemStyles = {
    padding: "10px",
    margin: "5px",
    border: "1px solid transparent",
    borderRadius: "5px",
  };

  const inputData = [
    { title: "Gap", value: gap, onChange: setGap },
    { title: "Order", value: order, onChange: setOrder },
    { title: "Flex Grow", value: flexGrow, onChange: setFlexGrow },
    { title: "Flex Shrink", value: flexShrink, onChange: setFlexShrink },
    { title: "Flex Basis", value: flexBasis, onChange: setFlexBasis },
    {
      title: "Flex",
      value: flex,
      onChange: setFlex,
      placeholder:
        "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
    },
  ];

  const dropDownData = [
    {
      title: "Flex Direction",
      options: ["row", "row-reverse", "column", "column-reverse"],
      value: flexDirection,
      onChange: setFlexDirection,
    },
    {
      title: "Flex Wrap",
      options: ["nowrap", "wrap", "wrap-reverse"],
      value: flexWrap,
      onChange: setFlexWrap,
    },
    {
      title: "Justify Content",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "start",
        "end",
        "left",
        "right",
      ],
      value: justifyContent,
      onChange: setJustifyContent,
    },
    {
      title: "Align Items",
      options: [
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "first baseline",
        "last baseline",
        "start",
        "end",
        "self-start",
        "self-end",
      ],
      value: alignItems,
      onChange: setAlignItems,
    },
    {
      title: "Align Content",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
        "start",
        "end",
        "baseline",
        "first baseline",
        "last baseline",
      ],
      value: alignContent,
      onChange: setAlignContent,
    },
    {
      title: "Align Self",
      options: [
        "auto",
        "flex-start",
        "flex-end",
        "center",
        "stretch",
        "baseline",
      ],
      value: alignSelf,
      onChange: setAlignSelf,
    },
  ];

  return (
    <Box margin="10px" padding="10px">
      <Box margin="10px 0px" rounded className={styles.rue_flex_box_container}>
        <Box width="60%" outlined height="auto" style={containerStyles}>
          {divs.map((_, i) => (
            <Box
              elevation={1}
              rounded
              key={i}
              width="100px"
              height="80px"
              style={{
                color: "#ffff",
                backgroundColor: colors[i % colors.length],
                ...itemStyles,
              }}
            >
              Item:{i + 1}
              <CloseButton size="sm" onClick={() => deleteDiv(i)} />
            </Box>
          ))}
        </Box>
        <Box
          outlined
          width="39%"
          height="auto"
          padding="10px"
          style={{ overflow: "auto" }}
          rounded
        >
          <Box
            width="100%"
            height="auto"
            padding="10px"
            margin="0 0 10px 0"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button size="sm" variant="primary" onClick={addDiv}>
              Add Item
            </Button>
            <Button size="sm" variant="warning" onClick={clearDivs}>
              Clear All
            </Button>
          </Box>
          <Divider />

          <Box
            padding="10px"
            margin="0 0 10px 0"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {dropDownData.map((item, index) => (
              <Box key={index}>
                <Paragraph fontSize="12px" fontWeight="500">
                  {item.title}:
                </Paragraph>
                <Dropdown
                  variant="primary"
                  size="sm"
                  value={item.value}
                  onChange={(selectedOption) => item.onChange(selectedOption)}
                  placeholder="Choose an option"
                >
                  {item.options.map((opt, optIndex) => (
                    <Dropdown.Item key={optIndex} value={opt}>
                      {opt}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              </Box>
            ))}
          </Box>
          <Divider />
          <Box
            padding="10px"
            margin="0 0 10px 0"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {inputData.map((item, index) => (
              <Box key={index} padding="3px 5px" margin="0 0 10px 0">
                <Paragraph fontSize="12px" fontWeight="500">
                  {item.title}:
                </Paragraph>
                <Form.Input
                  size="sm"
                  type="text"
                  value={item.value}
                  onChange={(e) => item.onChange(e.target.value)}
                  placeholder={item.placeholder}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <SyntaxHighLighter
        code={htmlCode}
        language="html"
        title="Generated HTML"
      />
      <SyntaxHighLighter code={cssCode} language="css" title="Generated CSS" />
    </Box>
  );
};

export default React.memo(FlexboxPlayGround);
