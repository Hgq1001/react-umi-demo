/**
 * @Author:hgq
 * @Describe:
 */
import React, { useState, useEffect } from 'react';
import * as utils from '@/utils/utils';

const CHESS_COUNT = 20;

const initChessBox = () => {
  let chessBoardInfo = [];
  for (let i = 0; i < CHESS_COUNT; i++) {
    chessBoardInfo[i] = [];
    for (let j = 0; j < CHESS_COUNT; j++) {
      chessBoardInfo[i][j] = 0;
    }
  }
  console.log('chessBoardInfo--->', chessBoardInfo);
  return chessBoardInfo;
  // setChessBoardInfo(chessBoardInfo);
};

function About() {


  const [chessBoard, setChessBoard] = useState(null);
  const [chessBoardInfo, setChessBoardInfo] = useState(initChessBox());
  const [isBlack, setIsBlack] = useState(true);

  const drawChessBoard = () => {
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    context.fillRect(15, 585, 15, 585);
    for (let i = 0; i < CHESS_COUNT; i++) {
      context.moveTo(15 + i * 30, 15);
      context.lineTo(15 + i * 30, 585);
      //垂直方向画15根，相距30px
      context.stroke();
      context.moveTo(15, 15 + i * 30);
      context.lineTo(585, 15 + i * 30);
      //水平方向画15根，相距30px
      context.stroke();
    }
    setChessBoard(context);
    canvas.addEventListener('click', (e) => canvasClick(e));
  };

  const canvasClick = (e) => {
    let x = e.offsetX;//相对于棋盘左上角的x坐标
    let y = e.offsetY;//相对于棋盘左上角的y坐标
    let i = Math.floor(x / 30);
    let j = Math.floor(y / 30);
    console.log('click', i, j, chessBoardInfo);
    if (chessBoardInfo[i][j] === 0) {
      drawChess(i, j, isBlack);
      if (isBlack) {
        chessBoardInfo[i][j] = 1;
      } else {
        chessBoardInfo[i][j] = 2;
      }
      setIsBlack(!isBlack);
    }
  };

  // 绘制黑棋或白棋
  const drawChess = (x, y, isBlack) => {
    // const context = this.chessboard.getContext('2d');
    console.log('chessBoard--->', chessBoard);
    // let gradient = chessBoard.createRadialGradient(x, y, 10, x - 5, y - 5, 0);
    // chessBoard.beginPath();
    // chessBoard.arc(x, y, 10, 0, 2 * Math.PI);
    // chessBoard.closePath();
    // if (isBlack) {
    //   gradient.addColorStop(0, '#0a0a0a');
    //   gradient.addColorStop(1, '#636766');
    // } else {
    //   gradient.addColorStop(0, '#d1d1d1');
    //   gradient.addColorStop(1, '#f9f9f9');
    // }
    // chessBoard.fillStyle = gradient;
    // chessBoard.fill();
  };


  useEffect(() => {
    initChessBox();
    drawChessBoard();
  }, []);

  return (
    <div>
      <canvas id="myCanvas" width="600px" height="600px"/>
    </div>
  );
}

export default About;
