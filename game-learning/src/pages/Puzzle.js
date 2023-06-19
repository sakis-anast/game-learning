import {  useState, useEffect } from "react";
import "../styles/puzzle.scss";

const getShuffledPuzzle = () => {
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const rowOne = [],
    rowTwo = [],
    rowThree = [];

  while (values.length) {
    const random = Math.floor(Math.random() * values.length);

    if (rowOne.length < 3) {
      rowOne.push(values.splice(random, 1)[0]);
    } else if (rowTwo.length < 3) {
      rowTwo.push(values.splice(random, 1)[0]);
    } else {
      rowThree.push(values.splice(random, 1)[0]);
    }
  }

  return [rowOne, rowTwo, rowThree];
};

const flattenArray = arr => {
  return arr.reduce((flatArr, subArr) => flatArr.concat(subArr), []);
};

const getInversionsCount = arr => {
  arr = flattenArray(arr).filter(n => n !== 0);

  const inversions = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const currentValue = arr[i];
    const currentInversions = arr.filter(
      (val, j) => i < j && val < currentValue
    );
    inversions.push(currentInversions.length);
  }

  const inversionsCount = inversions.reduce((total, val) => total + val, 0);

  return inversionsCount;
};

const isSolvable = puzzle => {
  return getInversionsCount(puzzle) % 2 === 0;
};

const getPuzzle = () => {
  let puzzle = getShuffledPuzzle();

  while (!isSolvable(puzzle)) {
    puzzle = getShuffledPuzzle();
  }

  return puzzle;
};

 function Puzzle() {
  const [puzzle, setPuzzle] = useState([]);
  const [complete, setComplete] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setPuzzle(getPuzzle());
  }, []);

  const movePiece = (x, y) => {
    if (!complete) {
      if (checkNeighbours(x, y) || checkNeighbours(x, y, 2)) {
        const emptySlot = checkNeighbours(x, y) || checkNeighbours(x, y, 2);

        const newPuzzle = puzzle.map(row => row.slice());

        if (x === emptySlot.x && y < emptySlot.y) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y + 1];
          newPuzzle[x][y + 1] = newPuzzle[x][y];
          newPuzzle[x][y] = 0;
        } else if (x === emptySlot.x && y > emptySlot.y) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x][y - 1];
          newPuzzle[x][y - 1] = newPuzzle[x][y];
          newPuzzle[x][y] = 0;
        }

        if (y === emptySlot.y && x < emptySlot.x) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x + 1][y];
          newPuzzle[x + 1][y] = newPuzzle[x][y];
          newPuzzle[x][y] = 0;
        } else if (y === emptySlot.y && x > emptySlot.x) {
          newPuzzle[emptySlot.x][emptySlot.y] = puzzle[x - 1][y];
          newPuzzle[x - 1][y] = newPuzzle[x][y];
          newPuzzle[x][y] = 0;
        }

        setPuzzle(newPuzzle);

        setMoves(moves + 1);

        checkCompletion(newPuzzle);
      }
    }
  };

  const checkCompletion = puzzle => {
    if (flattenArray(puzzle).join("") === "123456780") {
      setComplete(true);
    }
  };

  const checkNeighbours = (x, y, d = 1) => {
    const neighbours = [];

    if (puzzle[x][y] !== 0) {
      neighbours.push(
        puzzle[x - d] && puzzle[x - d][y] === 0 && { x: x - d, y: y }
      );
      neighbours.push(puzzle[x][y + d] === 0 && { x: x, y: y + d });
      neighbours.push(
        puzzle[x + d] && puzzle[x + d][y] === 0 && { x: x + d, y: y }
      );
      neighbours.push(puzzle[x][y - d] === 0 && { x: x, y: y - d });
    }

    const emptySlot = neighbours.find(el => typeof el === "object");

    return emptySlot;
  };

  const resetPuzzle = () => {
    setComplete(false);
    setPuzzle(getPuzzle());
    setMoves(0);
  };
  const skipGame = () => {
    setComplete(!complete);
   
  };
  return (
    <div className="App">
      <h3>The delegation cycle</h3>
      {/* {<h3>Moves: {moves}</h3>} */}
      <div
        style={{
          display: "inline-block",
          backgroundColor: "darkgray",
          border: `5px solid ${complete ? "black" : "gray"}`,
          borderRadius: 5,
          padding: 5
        }}
      >
        {puzzle.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex"
            }}
          >
            {row.map((col, j) => {
              const color = col === 0 ? "transparent" : "lightgray";
              return (
                <div
                  key={`${i}-${j}`}
                  onClick={() => movePiece(i, j)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 144,
                    height: 144,
                    margin: 2,
                    backgroundColor: color,
                    borderRadius: 5,
                    cursor: complete ? "not-allowed" : "pointer",
                    userSelect: "none"
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>
                    {col !== 0 && col}
                    </span>
                    <br></br>
                    <br></br>
                    <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {col === 1 ? ". Define" : null}
                    {col === 2 ? ". Select" : null}
                    {col === 3 ? ". Train" : null}
                    {col === 4 ? ". Discuss" : null}
                    {col === 5 ? ". Limits" : null}
                    {col === 6 ? ". Commitment" : null}
                    {col === 7 ? ". Inform" : null}
                    {col === 8 ? ". Feedback" : null}



                    </p>


                </div>
              );
            })}
          </div>
        ))}
      </div>
      <button  onClick={() => {
              skipGame();
            }}> skip game</button>

<button
            onClick={() => {
              resetPuzzle();
            }}
          >
            Play Again
          </button>
      {complete && (
        <>
        <p>
         
        </p>
        <p>
          <ol>
<li>
Define
Ensure that you define the task you are going to delegate. Explain as clearly as possible your expectations of quality, time and money


</li>
<li>
Select
Decide which person you plan to delegate to. Are they available? Do they have the time?
</li>
<li>
Train
Do they require additional training to do this delegated task? Do they understand what needs to be done?

</li>
<li>
Discuss
Take the time to explain to the person why you are delegating the task.
</li>
<li>
Limits
State the boundaries and parameters involved. Explain budget or approval levels. Agree on review dates. Give them enough creative freedom to do the task though - remember the best leaders ask and don't tell.

</li>
<li>
Commitment
Confirm that the individual accepts the delegation and don't assume that they have accepted the task without agreement. Now let the person do the task without your involvement – beware of micromanagement or reverse delegation.
</li>
<li>
Inform
Make sure you inform all other stakeholders about the delegation. This sends a clear message that the task is no longer your responsibility.
</li>
<li>
Feedback
This should be ongoing, not just at the end of the task. Make sure that you let the person know how they are getting on and remain available to the person should they have any queries.

Delegation is an obvious way of releasing more time. Delegation is not a quick fix but it is an astute long term investment of time. If you practise delegation, you will become better at it and you will find it to be one of your most valuable leadership skills.
</li>
          </ol>
        





        </p>
        </>
      )}
    </div>
  );
}

export default Puzzle;