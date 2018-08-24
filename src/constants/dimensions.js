import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

// to increase the size of the buttons a little as the screen gets larger
const widthS6 = 360;
const scaleFactor = 0.5;
const scale = ((screenWidth - widthS6) * scaleFactor + widthS6) / widthS6;

// hardcoded from image
const headerImgHeight = 273;
const headerImgWidth = 569;
const buttonImgHeight = 64;
const buttonImgWidth = 200;
const holeImgHeight = 192;
const holeImgWidth = 388;
const maskImgHeight = 152;
const maskImgWidth = 424;
const moleImgHeight = 500;
const moleImgWidth = 300;

// basic hole size
const holeDim = 80;

const reductionRatio = holeDim / holeImgWidth;

const holeBuffer = holeDim / 6;
const holeHeight = holeDim;
const holeWidth = holeDim;

// calculated to fit screen
const headerHeight = Math.ceil(
  (screenWidth / headerImgWidth) * headerImgHeight
);
const headerWidth = screenWidth;

const maskWidth = maskImgWidth * reductionRatio;
const maskHeight = maskImgHeight * reductionRatio * 0.75;

const moleWidth = holeDim;
const moleHeight = moleImgHeight * (moleWidth / moleImgWidth);

const buttonAdjust = 0.5 * scale;
const buttonHeight = buttonImgHeight * buttonAdjust;
const buttonWidth = buttonImgWidth * buttonAdjust;
const buttonTop = 35 * scale;
const buttonEdge = 20 * scale;

const fontSize = 20 * scale;

const numCols = Math.floor(screenWidth / (holeWidth + holeBuffer));
const numRows = Math.floor(
  (screenHeight - headerHeight) / (holeWidth + holeBuffer)
);

const numMoles = numCols * numRows - Math.floor(numRows / 2);

const moleUpPos = 0;
const moleDownPos = 65;

export default {
  numCols,
  numRows,
  numMoles,

  headerHeight,
  headerWidth,

  buttonHeight,
  buttonWidth,
  buttonTop,
  buttonEdge,

  fontSize,

  holeHeight,
  holeWidth,
  holeBuffer,

  maskWidth,
  maskHeight,

  moleHeight,
  moleWidth,

  moleUpPos,
  moleDownPos
};
