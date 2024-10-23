const jwt = require("jsonwebtoken");
const { Match } = require("../models");
const { where } = require("sequelize");

const createMatch = async (req, res) => {
  try {
    const token = req.cookies.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const playerOneId = decoded.id;

    const { playerOneValue } = req.body;
    const newMatch = await Match.create({
      playerOne: playerOneId,
      playerOneValue: playerOneValue,
    });

    return res.status(201).send({
      code: 201,
      status: "Match created successfully",
      match: newMatch,
    });
  } catch (error) {
    console.error("Error creating match: ", error);
    return res.status(500).send({
      code: 500,
      status: "Internal server error",
      message: error?.message,
    });
  }
};

const getAllMatch = async (req, res) => {
  try {
    const match = await Match.findAll({
      where: {
        playerTwo: null,
        playerTwoValue: null,
      },
    });
    return res.status(200).send({
      code: 200,
      status: "Ok",
      data: match,
    });
  } catch (error) {
    return res.status(500).send({
      code: 500,
      status: "Failed",
      message: error?.message,
    });
  }
};
const compateMatch = async (req, res) => {
  try {
    const { matchId, value } = req.body;
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const playerLogin = decoded.id;

    const match = await Match.findOne({ where: { id: matchId } });
    console.log(match);
    if (playerLogin === match.playerOne) {
      return res.status(400).send({
        code: 400,
        status: "fialed",
        message: "ga bisa maen",
      });
    }

    let resultMessage;
    if (match.playerOneValue === value) {
      resultMessage = " draw!";
    } else if (
      (match.playerOneValue === "Rock" && value === "Scissors") ||
      (match.playerOneValue === "Scissors" && value === "Paper") ||
      (match.playerOneValue === "Paper" && value === "Rock")
    ) {
      resultMessage = "Player One wins!";
    } else {
      resultMessage = "Player Two wins!";
    }

    await Match.update(
      {
        playerTwo: playerLogin,
        playerTwoValue: value,
      },
      {
        where: { id: matchId },
      }
    );

    return res.send({
      code: 200,
      status: "success",
      message: resultMessage,
    });
  } catch (error) {
    return res.status(500).send({
      code: 500,
      status: "Failed",
      message: error?.message,
    });
  }
};
const getAllScore = async (req, res) => {
  try {
    const matches = await Match.findAll();
    let playerScores = {};

    matches.forEach((match) => {
      const { playerOne, playerOneValue, playerTwo, playerTwoValue } = match;
      if (!playerScores[playerOne]) playerScores[playerOne] = 0;
      if (!playerScores[playerTwo]) playerScores[playerTwo] = 0;

      if (
        (playerOneValue === "Rock" && playerTwoValue === "Scissors") ||
        (playerOneValue === "Scissors" && playerTwoValue === "Paper") ||
        (playerOneValue === "Paper" && playerTwoValue === "Rock")
      ) {
        playerScores[playerOne]++;
      } else if (
        (playerTwoValue === "Rock" && playerOneValue === "Scissors") ||
        (playerTwoValue === "Scissors" && playerOneValue === "Paper") ||
        (playerTwoValue === "Paper" && playerOneValue === "Rock")
      ) {
        playerScores[playerTwo]++;
      }
    });

    return res.status(200).send({
      code: 200,
      status: "Ok",
      result: {
        player1: playerScores[1] || 0,
        player2: playerScores[2] || 0,
      },
    });
  } catch (error) {
    return res.status(500).send({
      code: 500,
      status: "Failed",
      message: error?.message,
    });
  }
};

module.exports = {
  createMatch,
  getAllMatch,
  compateMatch,
  getAllScore,
};
