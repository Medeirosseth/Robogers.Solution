using System.Linq;
using System.Collections.Generic;

namespace MrRoboger.Models
{
  public class Game
  {
    private static Dictionary<string, string> _whatWinsAgainstChoice = new Dictionary<string, string>()
    {
      {"rock", "paper"},
      {"paper", "scissors"},
      {"scissors", "rock"}
    };

    public static string WhoWon(string playerOneChoice, string playerTwoChoice)
    {
      string[] validInputs = {"rock", "paper", "scissors"};
      if(!validInputs.Contains(playerOneChoice) || !validInputs.Contains(playerTwoChoice))
      {
        return "Error";
      }

      if (playerOneChoice == playerTwoChoice)
      {
        return "Draw";
      }

      string winsAgainstPlayerOne = _whatWinsAgainstChoice[playerOneChoice];
      if (playerTwoChoice != winsAgainstPlayerOne)
      {
        return "Player One Wins!";
      }
      else
      {
        return "Player Two Wins!";
      }
    }
  }
}
